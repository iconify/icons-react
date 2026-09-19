import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i12ji_bzg.css';
import '../../css/x/xamblhbag.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i12ji_bzg"/><path transform="matrix(-.4104 0 0 .41613 16.655 7.41)" class="xamblhbag"/>`,
		"fallback": "catppuccin:folder-security-open",
	});
}

export default Component;
