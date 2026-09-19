import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhq8vgbxo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhq8vgbxo"/>`,
		"fallback": "carbon:aggregator-recalculation",
	});
}

export default Component;
