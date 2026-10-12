import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaweymbez.css';
import '../../css/i/iemqaibxb.css';
import '../../css/b/bag-f3b3z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qaweymbez"/><path class="iemqaibxb"/><path class="bag-f3b3z"/>`,
		"fallback": "garden:box-expand-stroke-20",
	});
}

export default Component;
