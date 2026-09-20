import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujvt1kxzr.css';
import '../../css/o/oz51gzb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujvt1kxzr"/><path clip-rule="evenodd" class="oz51gzb3w"/>`,
		"fallback": "si:ai-briefcase-fill",
	});
}

export default Component;
