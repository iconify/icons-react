import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi8iyxe_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi8iyxe_s"/>`,
		"fallback": "streamline-logos:code-climate-logo",
	});
}

export default Component;
