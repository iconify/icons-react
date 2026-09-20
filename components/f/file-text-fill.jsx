import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuc0bcbfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuc0bcbfs"/>`,
		"fallback": "keyline-icons:file-text-fill",
	});
}

export default Component;
