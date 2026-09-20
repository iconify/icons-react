import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdlysac4f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdlysac4f"/>`,
		"fallback": "pinhead:dog-sitting-wearing-collar-and-exclamation-point",
	});
}

export default Component;
