import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fh3267bdt.css';
import '../../css/i/i6e07yb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fh3267bdt"/><path class="i6e07yb0o"/></g>`,
		"fallback": "hugeicons:alphabet-hebrew",
	});
}

export default Component;
