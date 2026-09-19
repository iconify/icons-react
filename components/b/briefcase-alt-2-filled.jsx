import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vamcxub9f.css';
import '../../css/i/i7a-gbc6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vamcxub9f"/><path class="i7a-gbc6o"/>`,
		"fallback": "boxicons:briefcase-alt-2-filled",
	});
}

export default Component;
