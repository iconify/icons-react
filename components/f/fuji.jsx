import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlz4sml2p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlz4sml2p"/>`,
		"fallback": "game-icons:fuji",
	});
}

export default Component;
