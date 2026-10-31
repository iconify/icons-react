import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgu_qf8mr.css';
import '../../css/n/nirbr8brm.css';
import '../../css/a/aot_jkqqo.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgu_qf8mr"/><path class="nirbr8brm"/><path class="aot_jkqqo"/>`,
		"fallback": "tabler-flags:gabon",
	});
}

export default Component;
