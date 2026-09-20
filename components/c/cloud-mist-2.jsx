import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jd6lsrbdf.css';
import '../../css/f/fwj1e14xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jd6lsrbdf"/><path class="fwj1e14xq"/></g>`,
		"fallback": "streamline-ultimate:cloud-mist-2",
	});
}

export default Component;
