import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-iptellt.css';
import '../../css/o/owrwif8bq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-iptellt"/><path class="owrwif8bq"/>`,
		"fallback": "tdesign:image-carousel-filled",
	});
}

export default Component;
