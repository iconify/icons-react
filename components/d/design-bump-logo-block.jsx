import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bugtqh3mx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bugtqh3mx"/>`,
		"fallback": "streamline-logos:design-bump-logo-block",
	});
}

export default Component;
