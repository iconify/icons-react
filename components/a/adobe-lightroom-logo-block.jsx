import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcnyw0x5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kcnyw0x5n"/>`,
		"fallback": "streamline-logos:adobe-lightroom-logo-block",
	});
}

export default Component;
