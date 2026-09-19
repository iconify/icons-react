import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rduhzwges.css';
import '../../css/t/tfp-hccys.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rduhzwges"/><path class="tfp-hccys"/></g>`,
		"fallback": "fluent-emoji-flat:coin",
	});
}

export default Component;
