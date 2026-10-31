import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjnc-d4pe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yjnc-d4pe"/>`,
		"fallback": "sidekickicons:dots-2x2-20-solid",
	});
}

export default Component;
