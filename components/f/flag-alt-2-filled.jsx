import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z13c673tt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z13c673tt"/>`,
		"fallback": "boxicons:flag-alt-2-filled",
	});
}

export default Component;
