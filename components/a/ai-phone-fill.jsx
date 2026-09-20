import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku6a4achx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku6a4achx"/>`,
		"fallback": "si:ai-phone-fill",
	});
}

export default Component;
