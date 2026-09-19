import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivwl1-arg.css';
import '../../css/z/z7-npobbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivwl1-arg"/><path class="z7-npobbq"/>`,
		"fallback": "boxicons:car",
	});
}

export default Component;
