import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m42zp2umy.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m42zp2umy"/>`,
		"fallback": "whh:gameboy",
	});
}

export default Component;
