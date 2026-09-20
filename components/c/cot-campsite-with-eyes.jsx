import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnab4-blq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnab4-blq"/>`,
		"fallback": "pinhead:cot-campsite-with-eyes",
	});
}

export default Component;
