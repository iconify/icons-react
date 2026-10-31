import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwu9w-bih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwu9w-bih"/>`,
		"fallback": "withicons:clipboard-check-gloss",
	});
}

export default Component;
