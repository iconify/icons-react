import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eizb1y4-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eizb1y4-y"/>`,
		"fallback": "tabler:brand-angular-filled",
	});
}

export default Component;
