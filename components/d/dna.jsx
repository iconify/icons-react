import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/s/s7_vqqb7b.css';
import '../../css/w/w61q9hymn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="s7_vqqb7b"/><path class="w61q9hymn"/></g>`,
		"fallback": "streamline-color:dna",
	});
}

export default Component;
