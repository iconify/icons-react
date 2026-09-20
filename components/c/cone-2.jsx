import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9czzrh6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9czzrh6j"/>`,
		"fallback": "tabler:cone-2",
	});
}

export default Component;
