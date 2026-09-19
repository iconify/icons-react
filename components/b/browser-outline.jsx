import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar30v6f3w.css';
import '../../css/r/ra4bz523e.css';
import '../../css/w/wa0xce7qd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar30v6f3w"/><circle class="ra4bz523e"/><circle class="wa0xce7qd"/>`,
		"fallback": "eva:browser-outline",
	});
}

export default Component;
