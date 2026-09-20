import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/v/vvisndbxo.css';
import '../../css/j/j_y3cbb3i.css';
import '../../css/o/os7a7-muo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="vvisndbxo"/><path class="j_y3cbb3i"/><path class="os7a7-muo"/></g>`,
		"fallback": "streamline:hearing-deaf-2",
	});
}

export default Component;
