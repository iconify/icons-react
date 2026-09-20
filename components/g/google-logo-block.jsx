import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh_0sfwki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lh_0sfwki"/>`,
		"fallback": "streamline-logos:google-logo-block",
	});
}

export default Component;
