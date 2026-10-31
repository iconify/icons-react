import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg0vacvyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zg0vacvyz"/>`,
		"fallback": "sidekickicons:h4-solid",
	});
}

export default Component;
