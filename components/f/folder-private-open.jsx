import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i12ji_bzg.css';
import '../../css/p/pgzvnfbvt.css';
import '../../css/r/r--b2dpcc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i12ji_bzg"/><circle class="pgzvnfbvt"/><path class="r--b2dpcc"/>`,
		"fallback": "catppuccin:folder-private-open",
	});
}

export default Component;
