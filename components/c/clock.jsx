import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqj_zryfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqj_zryfv"/>`,
		"fallback": "mdi-light:clock",
	});
}

export default Component;
