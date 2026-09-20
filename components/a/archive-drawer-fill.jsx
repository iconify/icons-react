import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pww4j9bhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pww4j9bhw"/>`,
		"fallback": "mage:archive-drawer-fill",
	});
}

export default Component;
