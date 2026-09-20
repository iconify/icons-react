import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/caa9iac3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="caa9iac3r"/>`,
		"fallback": "keyline-icons:circle-caret-right-sharp-fill",
	});
}

export default Component;
