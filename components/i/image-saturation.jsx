import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m8rf7nr2l.css';
import '../../css/v/v4t-b0bek.css';
import '../../css/u/uqp9kkbqv.css';
import '../../css/f/fhqo6ibzu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m8rf7nr2l"/><path class="v4t-b0bek"/><path class="uqp9kkbqv"/><path class="fhqo6ibzu"/></g>`,
		"fallback": "streamline-color:image-saturation",
	});
}

export default Component;
