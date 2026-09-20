import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezy90kb2o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezy90kb2o"/>`,
		"fallback": "teenyicons:info-outline",
	});
}

export default Component;
