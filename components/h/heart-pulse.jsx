import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/c50zoybkb.css';
import '../../css/m/mdnhgeb6a.css';
import '../../css/x/xe8wi4bvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="c50zoybkb"/><path class="mdnhgeb6a"/><path class="xe8wi4bvf"/></g>`,
		"fallback": "matita:heart-pulse",
	});
}

export default Component;
