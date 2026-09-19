import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/u/uuky_gise.css';
import '../../css/p/pftnf9bpg.css';
import '../../css/p/p196trped.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="uuky_gise"/><path class="pftnf9bpg"/><path class="p196trped"/></g>`,
		"fallback": "iconamoon:information-circle-light",
	});
}

export default Component;
