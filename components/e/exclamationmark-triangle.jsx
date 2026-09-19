import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i77-37njs.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i77-37njs"/>`,
		"fallback": "f7:exclamationmark-triangle",
	});
}

export default Component;
