import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nho-2e7vi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nho-2e7vi"/>`,
		"fallback": "pixel:flag-checkered",
	});
}

export default Component;
