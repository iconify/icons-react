import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g43-tlbbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g43-tlbbu"/>`,
		"fallback": "thesvg-color:ethers",
	});
}

export default Component;
