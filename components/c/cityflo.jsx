import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwh12uzbw.css';

const viewBox = {"width":192,"height":61};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwh12uzbw"/>`,
		"fallback": "thesvg-color:cityflo",
	});
}

export default Component;
