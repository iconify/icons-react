import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuki3zbay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kuki3zbay"/>`,
		"fallback": "reicon:film",
	});
}

export default Component;
