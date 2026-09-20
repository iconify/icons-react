import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1tz2rciq.css';
import '../../css/t/t8vg6kras.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1tz2rciq"/><path class="t8vg6kras"/>`,
		"fallback": "streamline-ultimate:adobe-after-effects-logo-bold",
	});
}

export default Component;
