import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq4--5bem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq4--5bem"/>`,
		"fallback": "keyline-icons:expand-dashed-up-left-box-fill",
	});
}

export default Component;
