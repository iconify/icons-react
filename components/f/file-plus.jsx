import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pve6rn_8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pve6rn_8y"/>`,
		"fallback": "keyline-icons:file-plus",
	});
}

export default Component;
