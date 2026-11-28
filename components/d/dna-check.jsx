import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmt6w7bzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmt6w7bzy"/>`,
		"fallback": "noviair:dna-check",
	});
}

export default Component;
