import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzthl2mbc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzthl2mbc"/>`,
		"fallback": "game-icons:chameleon-glyph",
	});
}

export default Component;
