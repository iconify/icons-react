import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy1_gac9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dy1_gac9y"/>`,
		"fallback": "streamline-logos:egnyte-logo-block",
	});
}

export default Component;
