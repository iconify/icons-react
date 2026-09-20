import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzh3ahbvr.css';
import '../../css/f/f5tkpn2pc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzh3ahbvr"/><path class="f5tkpn2pc"/>`,
		"fallback": "nimbus:backspace",
	});
}

export default Component;
