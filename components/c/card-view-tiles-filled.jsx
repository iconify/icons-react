import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bls-2lq9o.css';
import '../../css/p/p5wivnb6o.css';
import '../../css/c/ces-s2pfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="bls-2lq9o"/><rect class="p5wivnb6o"/><path class="ces-s2pfe"/>`,
		"fallback": "boxicons:card-view-tiles-filled",
	});
}

export default Component;
