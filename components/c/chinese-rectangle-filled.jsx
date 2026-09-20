import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxozi2b1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxozi2b1p"/>`,
		"fallback": "tdesign:chinese-rectangle-filled",
	});
}

export default Component;
