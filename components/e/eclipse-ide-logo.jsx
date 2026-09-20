import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/w/wjvhd3bnr.css';
import '../../css/z/z12o2dzxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="wjvhd3bnr"/><path class="z12o2dzxj"/></g>`,
		"fallback": "streamline-logos:eclipse-ide-logo",
	});
}

export default Component;
