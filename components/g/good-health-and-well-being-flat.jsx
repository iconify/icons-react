import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rw4zsaclw.css';
import '../../css/a/apk1_mb7k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rw4zsaclw"/><path class="apk1_mb7k"/></g>`,
		"fallback": "streamline-color:good-health-and-well-being-flat",
	});
}

export default Component;
