import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyy55sbjn.css';
import '../../css/p/pksro9bgq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyy55sbjn"/><path class="pksro9bgq"/>`,
		"fallback": "garden:accessibility-stroke-20",
	});
}

export default Component;
