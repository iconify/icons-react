import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0x_n6utq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0x_n6utq"/>`,
		"fallback": "pinhead:coffin-with-ankh",
	});
}

export default Component;
