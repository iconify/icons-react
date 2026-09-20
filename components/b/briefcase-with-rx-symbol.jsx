import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mebq5ha2p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mebq5ha2p"/>`,
		"fallback": "pinhead:briefcase-with-rx-symbol",
	});
}

export default Component;
