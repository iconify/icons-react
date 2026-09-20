import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e57tfzbtq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e57tfzbtq"/>`,
		"fallback": "streamline:horizontal-menu-circle-solid",
	});
}

export default Component;
