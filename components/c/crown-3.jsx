import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjp33xwpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tjp33xwpg"/>`,
		"fallback": "lineicons:crown-3",
	});
}

export default Component;
