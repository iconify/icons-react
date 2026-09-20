import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt1k-qwgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nt1k-qwgo"/>`,
		"fallback": "streamline-sharp:archive-box-remix",
	});
}

export default Component;
