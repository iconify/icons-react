import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh1wx-cjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eh1wx-cjl"/>`,
		"fallback": "stash:data-boolean-solid",
	});
}

export default Component;
