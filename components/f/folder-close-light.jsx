import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzib90kdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzib90kdf"/>`,
		"fallback": "iconamoon:folder-close-light",
	});
}

export default Component;
