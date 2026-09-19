import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obr3sqb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obr3sqb_o"/>`,
		"fallback": "bxl:bolt-b",
	});
}

export default Component;
