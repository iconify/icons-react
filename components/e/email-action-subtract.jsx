import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yi9eumbcn.css';
import '../../css/m/m4unhhbun.css';
import '../../css/q/q0slogedd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yi9eumbcn"/><path class="m4unhhbun"/><path class="q0slogedd"/></g>`,
		"fallback": "streamline-ultimate:email-action-subtract",
	});
}

export default Component;
