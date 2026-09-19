import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc56-vb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vc56-vb8b"/>`,
		"fallback": "griddy-icons:halloween-spellbook-filled",
	});
}

export default Component;
