import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo47_w.css';
import '../../css/s/so-from-12.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo47_w"/>`,
		"fallback": "line-md:close",
	});
}

export default Component;
