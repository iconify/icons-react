import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3no70bkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v3no70bkc"/>`,
		"fallback": "solar:buildings-2-bold",
	});
}

export default Component;
