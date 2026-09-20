import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjsa0n_hg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjsa0n_hg"/>`,
		"fallback": "pinhead:arrow-up-from-rectangle-outline",
	});
}

export default Component;
