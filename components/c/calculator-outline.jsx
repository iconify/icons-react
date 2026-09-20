import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezmn_4spe.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezmn_4spe"/>`,
		"fallback": "teenyicons:calculator-outline",
	});
}

export default Component;
