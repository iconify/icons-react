import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjrm1iu6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gjrm1iu6s"/>`,
		"fallback": "streamline-logos:ati-logo-block",
	});
}

export default Component;
