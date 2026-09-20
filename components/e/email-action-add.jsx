import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rn-2cioxv.css';
import '../../css/m/m4unhhbun.css';
import '../../css/q/qa8-8s9mi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rn-2cioxv"/><path class="m4unhhbun"/><path class="qa8-8s9mi"/></g>`,
		"fallback": "streamline-ultimate:email-action-add",
	});
}

export default Component;
