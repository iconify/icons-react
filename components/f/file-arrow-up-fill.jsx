import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga0lxoykk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga0lxoykk"/>`,
		"fallback": "bi:file-arrow-up-fill",
	});
}

export default Component;
