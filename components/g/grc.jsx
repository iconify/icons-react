import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jiy_jr2tf.css';
import '../../css/a/azjswrsrh.css';
import '../../css/n/n9w5lobwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jiy_jr2tf"/><path class="azjswrsrh"/><path class="n9w5lobwk"/>`,
		"fallback": "token:grc",
	});
}

export default Component;
