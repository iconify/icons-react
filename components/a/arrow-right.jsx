import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg_0asz9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg_0asz9w"/>`,
		"fallback": "griddy-icons:arrow-right",
	});
}

export default Component;
