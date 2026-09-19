import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb-1labtg.css';
import '../../css/f/fp79t9bwv.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="wb-1labtg"/><path class="fp79t9bwv"/>`,
		"fallback": "clarity:host-solid",
	});
}

export default Component;
