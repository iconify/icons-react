import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks18lwb6u.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks18lwb6u"/>`,
		"fallback": "dinkie-icons:file-woff2-small-filled",
	});
}

export default Component;
