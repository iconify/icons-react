import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwpb1xudv.css';
import '../../css/f/f-bnc8bnz.css';
import '../../css/u/um4v6ab4h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwpb1xudv"/><path class="f-bnc8bnz"/><path class="um4v6ab4h"/>`,
		"fallback": "streamline-pixel:coding-apps-websites-conference",
	});
}

export default Component;
