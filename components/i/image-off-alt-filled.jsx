import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il0_djbfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="il0_djbfu"/>`,
		"fallback": "griddy-icons:image-off-alt-filled",
	});
}

export default Component;
