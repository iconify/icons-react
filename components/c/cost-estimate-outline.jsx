import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eer9vgryz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eer9vgryz"/>`,
		"fallback": "teenyicons:cost-estimate-outline",
	});
}

export default Component;
