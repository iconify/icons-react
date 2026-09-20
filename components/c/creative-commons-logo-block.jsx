import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd49lac2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qd49lac2d"/>`,
		"fallback": "streamline-logos:creative-commons-logo-block",
	});
}

export default Component;
