import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyq5_6mmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eyq5_6mmm"/>`,
		"fallback": "si:building-alt-2-fill",
	});
}

export default Component;
