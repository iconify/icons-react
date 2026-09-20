import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdzt4qcas.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdzt4qcas"/>`,
		"fallback": "pinhead:dog-sled",
	});
}

export default Component;
