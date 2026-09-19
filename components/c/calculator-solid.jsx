import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzdh5gb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mzdh5gb6w"/>`,
		"fallback": "heroicons:calculator-solid",
	});
}

export default Component;
