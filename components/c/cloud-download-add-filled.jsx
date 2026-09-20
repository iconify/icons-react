import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig3ggqbgy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ig3ggqbgy"/>`,
		"fallback": "ix:cloud-download-add-filled",
	});
}

export default Component;
