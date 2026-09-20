import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjof12r2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pjof12r2z"/>`,
		"fallback": "keyline-icons:credit-card-sharp-fill",
	});
}

export default Component;
