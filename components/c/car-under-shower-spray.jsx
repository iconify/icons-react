import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0u8oxbru.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0u8oxbru"/>`,
		"fallback": "pinhead:car-under-shower-spray",
	});
}

export default Component;
