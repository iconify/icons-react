import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kex-dpb0k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kex-dpb0k"/>`,
		"fallback": "pinhead:dispensing-machine-with-drink-cup-with-straw",
	});
}

export default Component;
