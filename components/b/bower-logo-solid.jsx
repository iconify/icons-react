import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx14hgm4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qx14hgm4y"/>`,
		"fallback": "streamline-logos:bower-logo-solid",
	});
}

export default Component;
