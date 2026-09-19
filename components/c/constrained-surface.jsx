import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kko0stbbj.css';
import '../../css/z/z31pkdfpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kko0stbbj"/><path class="z31pkdfpd"/></g>`,
		"fallback": "iconoir:constrained-surface",
	});
}

export default Component;
