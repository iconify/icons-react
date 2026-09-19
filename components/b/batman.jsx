import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w78zmccuk.css';

const viewBox = {"width":833,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w78zmccuk"/>`,
		"fallback": "whh:batman",
	});
}

export default Component;
