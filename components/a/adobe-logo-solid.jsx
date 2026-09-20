import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt3xprf1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qt3xprf1w"/>`,
		"fallback": "streamline-logos:adobe-logo-solid",
	});
}

export default Component;
