import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvf_d7bka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xvf_d7bka"/>`,
		"fallback": "streamline-logos:ello-logo-block",
	});
}

export default Component;
