import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf5tjob_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xf5tjob_g"/>`,
		"fallback": "streamline-logos:electronic-arts-logo-block",
	});
}

export default Component;
