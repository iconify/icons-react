import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2r3i0s8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2r3i0s8y"/>`,
		"fallback": "tdesign:file-image-filled",
	});
}

export default Component;
