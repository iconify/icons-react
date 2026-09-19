import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym_r_5nav.css';
import '../../css/o/o7sf9lkhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ym_r_5nav"/><path class="o7sf9lkhs"/>`,
		"fallback": "basil:android-solid",
	});
}

export default Component;
