import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og742qsmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og742qsmi"/>`,
		"fallback": "coolicons:close-small-duotone-round",
	});
}

export default Component;
