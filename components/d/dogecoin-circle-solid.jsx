import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxrn3rb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uxrn3rb7p"/>`,
		"fallback": "iconoir:dogecoin-circle-solid",
	});
}

export default Component;
