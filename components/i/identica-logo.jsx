import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xm8qymblg.css';
import '../../css/k/k__40-bij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="xm8qymblg"/><path class="k__40-bij"/></g>`,
		"fallback": "streamline-logos:identica-logo",
	});
}

export default Component;
