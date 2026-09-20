import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdlg21b0o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdlg21b0o"/>`,
		"fallback": "streamline:food-barbeque-pot-cook-grill-bbq-drink-cooking-nutrition-pot-barbecue-grilling-food-cauldron",
	});
}

export default Component;
