import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tii4-acje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tii4-acje"/>`,
		"fallback": "sidekickicons:inbox-arrow-up-solid",
	});
}

export default Component;
