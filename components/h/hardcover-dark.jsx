import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo7m7yb1l.css';
import '../../css/i/if85crc2z.css';
import '../../css/z/z-2dyjb2r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo7m7yb1l"/><path class="if85crc2z"/><path class="z-2dyjb2r"/>`,
		"fallback": "selfhst:hardcover-dark",
	});
}

export default Component;
