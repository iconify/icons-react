import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbkksmmjq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbkksmmjq"/>`,
		"fallback": "famicons:file-tray-stacked-sharp",
	});
}

export default Component;
