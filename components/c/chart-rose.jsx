import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kgpwylbgu.css';
import '../../css/i/i7dhmn0vg.css';
import '../../css/o/of67m-bqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kgpwylbgu"/><path class="i7dhmn0vg"/><path class="of67m-bqt"/></g>`,
		"fallback": "hugeicons:chart-rose",
	});
}

export default Component;
