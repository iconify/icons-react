import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7l54zb3f.css';
import '../../css/i/ijxvr0blg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7l54zb3f"/><path class="ijxvr0blg"/>`,
		"fallback": "material-icon-theme:folder-constant",
	});
}

export default Component;
