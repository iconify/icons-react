import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt6wc-5ul.css';
import '../../css/i/iopdlzu5p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt6wc-5ul"/><path class="iopdlzu5p"/>`,
		"fallback": "streamline-pixel:business-products-magic-rabbit",
	});
}

export default Component;
