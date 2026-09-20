import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj5qrwuif.css';
import '../../css/z/z1iti509n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj5qrwuif"/><path clip-rule="evenodd" class="z1iti509n"/>`,
		"fallback": "si:align-bottom-detailed-fill",
	});
}

export default Component;
