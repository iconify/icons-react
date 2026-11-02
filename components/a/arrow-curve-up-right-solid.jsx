import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6v1yabvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c6v1yabvg"/>`,
		"fallback": "sidekickicons:arrow-curve-up-right-solid",
	});
}

export default Component;
