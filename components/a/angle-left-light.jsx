import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdiinzzdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdiinzzdg"/>`,
		"fallback": "stash:angle-left-light",
	});
}

export default Component;
