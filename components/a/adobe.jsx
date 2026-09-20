import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb8skhyob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb8skhyob"/>`,
		"fallback": "uil:adobe",
	});
}

export default Component;
