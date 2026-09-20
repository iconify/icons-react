import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psqwx_-ti.css';
import '../../css/i/if85crc2z.css';
import '../../css/m/mc-ix1blr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psqwx_-ti"/><path class="if85crc2z"/><path class="mc-ix1blr"/>`,
		"fallback": "selfhst:hardcover-dark",
	});
}

export default Component;
