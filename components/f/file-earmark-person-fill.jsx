import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0fztwm7m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0fztwm7m"/>`,
		"fallback": "bi:file-earmark-person-fill",
	});
}

export default Component;
