import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkrqf0b5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkrqf0b5b"/>`,
		"fallback": "hugeicons:folder-key",
	});
}

export default Component;
