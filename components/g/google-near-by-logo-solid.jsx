import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo52jq6wq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jo52jq6wq"/>`,
		"fallback": "streamline-logos:google-near-by-logo-solid",
	});
}

export default Component;
