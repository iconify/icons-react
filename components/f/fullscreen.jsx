import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or_nacp9b.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or_nacp9b"/>`,
		"fallback": "whh:fullscreen",
	});
}

export default Component;
