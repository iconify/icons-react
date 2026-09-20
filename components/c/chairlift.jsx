import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h88y73pra.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h88y73pra"/>`,
		"fallback": "temaki:chairlift",
	});
}

export default Component;
