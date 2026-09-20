import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4geurb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4geurb0u"/>`,
		"fallback": "tdesign:city-ancient-2-filled",
	});
}

export default Component;
