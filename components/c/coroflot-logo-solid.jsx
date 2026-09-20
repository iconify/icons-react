import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfnsoac9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cfnsoac9e"/>`,
		"fallback": "streamline-logos:coroflot-logo-solid",
	});
}

export default Component;
