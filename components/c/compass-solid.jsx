import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y63y_obeb.css';
import '../../css/i/ixud4xmsj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y63y_obeb"/><path clip-rule="evenodd" class="ixud4xmsj"/>`,
		"fallback": "teenyicons:compass-solid",
	});
}

export default Component;
