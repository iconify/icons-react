import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j71i4dbqj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/soc4v_wxl.css';
import '../../css/c/cbvzglb0e.css';
import '../../css/g/g688x0dlt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j71i4dbqj secondary"/><g class="dt0cm9dhy primary"><path class="soc4v_wxl"/><path class="cbvzglb0e"/><path class="g688x0dlt"/></g>`,
		"fallback": "iconaut:fridge-duo",
	});
}

export default Component;
