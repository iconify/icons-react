import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npp3zoi_p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="npp3zoi_p"/>`,
		"fallback": "streamline:incoming-call-remix",
	});
}

export default Component;
