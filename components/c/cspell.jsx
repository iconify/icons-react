import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sahvilbsv.css';
import '../../css/q/qwfd1bbze.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sahvilbsv"/><path class="qwfd1bbze"/>`,
		"fallback": "catppuccin:cspell",
	});
}

export default Component;
