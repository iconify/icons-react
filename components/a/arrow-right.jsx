import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzfv-sbvh.css';
import '../../css/f/fe3fg-bkg.css';
import '../../css/v/vs3nxnb9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzfv-sbvh wm-shadow"/><path class="fe3fg-bkg wm-k"/><path class="vs3nxnb9l wm-k"/>`,
		"fallback": "withicons-pastel:arrow-right",
	});
}

export default Component;
