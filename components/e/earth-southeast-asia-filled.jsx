import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_kkayb9j.css';
import '../../css/i/iiryr56qr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_kkayb9j"/><path class="iiryr56qr"/>`,
		"fallback": "carbon:earth-southeast-asia-filled",
	});
}

export default Component;
