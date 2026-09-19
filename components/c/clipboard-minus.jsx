import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibu_r4lcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ibu_r4lcx"/>`,
		"fallback": "griddy-icons:clipboard-minus",
	});
}

export default Component;
