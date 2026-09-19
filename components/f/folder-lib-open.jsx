import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i12ji_bzg.css';
import '../../css/l/lyimn3yqo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i12ji_bzg"/><path class="lyimn3yqo"/>`,
		"fallback": "catppuccin:folder-lib-open",
	});
}

export default Component;
