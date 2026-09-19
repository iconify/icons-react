import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axki3ebgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="axki3ebgb"/>`,
		"fallback": "griddy-icons:chart-number-filled",
	});
}

export default Component;
