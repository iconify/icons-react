import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/h5bwgp51v.css';
import '../../css/j/j7zjl_tvs.css';
import '../../css/f/frbkr5v1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="h5bwgp51v"/><path class="j7zjl_tvs"/><path class="frbkr5v1c"/></g>`,
		"fallback": "matita:hard-drive",
	});
}

export default Component;
