import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftl45_bmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftl45_bmq"/>`,
		"fallback": "mdi:file-document-box-multiple-outline",
	});
}

export default Component;
