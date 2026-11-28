import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnwo09bcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnwo09bcb"/>`,
		"fallback": "noviair-light:fuel",
	});
}

export default Component;
