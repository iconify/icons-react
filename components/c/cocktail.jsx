import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ezryshb8k.css';
import '../../css/x/x4gn8ly4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ezryshb8k"/><path class="x4gn8ly4j"/></g>`,
		"fallback": "lucide-lab:cocktail",
	});
}

export default Component;
