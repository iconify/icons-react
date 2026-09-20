import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3v6f1bdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k3v6f1bdo"/>`,
		"fallback": "reicon:folder-remove-filled",
	});
}

export default Component;
