import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x78rb0q8y.css';
import '../../css/e/escu-yb0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x78rb0q8y"/><path class="escu-yb0z"/>`,
		"fallback": "tdesign:image-add-filled",
	});
}

export default Component;
