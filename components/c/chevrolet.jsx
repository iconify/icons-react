import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa4p4804g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa4p4804g"/>`,
		"fallback": "thesvg-color:chevrolet",
	});
}

export default Component;
