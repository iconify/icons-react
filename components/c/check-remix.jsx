import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzjavk1ef.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzjavk1ef"/>`,
		"fallback": "streamline:check-remix",
	});
}

export default Component;
