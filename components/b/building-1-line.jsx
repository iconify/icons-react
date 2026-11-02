import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjbn6k5pd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjbn6k5pd"/>`,
		"fallback": "mingcute:building-1-line",
	});
}

export default Component;
