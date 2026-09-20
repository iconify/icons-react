import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz050sboo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz050sboo"/>`,
		"fallback": "teenyicons:expand-outline",
	});
}

export default Component;
