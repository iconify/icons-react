import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i12ji_bzg.css';
import '../../css/j/j63peqa5j.css';
import '../../css/j/jyokqg38s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i12ji_bzg"/><path class="j63peqa5j"/><path class="jyokqg38s"/>`,
		"fallback": "catppuccin:folder-symlink-open",
	});
}

export default Component;
