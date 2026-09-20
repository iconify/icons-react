import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xi0dnf10r.css';
import '../../css/d/do83y6b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xi0dnf10r"/><path class="do83y6b-i"/></g>`,
		"fallback": "reicon:health3",
	});
}

export default Component;
