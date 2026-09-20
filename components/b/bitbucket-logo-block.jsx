import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9x3kybiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e9x3kybiw"/>`,
		"fallback": "streamline-logos:bitbucket-logo-block",
	});
}

export default Component;
