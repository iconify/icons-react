import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt5ioiiqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt5ioiiqg"/>`,
		"fallback": "coolicons:id-badge-round",
	});
}

export default Component;
