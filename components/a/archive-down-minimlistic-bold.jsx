import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d80rk9xbs.css';
import '../../css/m/mp-tddbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d80rk9xbs"/><path clip-rule="evenodd" class="mp-tddbcs"/>`,
		"fallback": "solar:archive-down-minimlistic-bold",
	});
}

export default Component;
