import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o-d4_abqi.css';
import '../../css/b/b26c_4bfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="o-d4_abqi"/><path class="b26c_4bfq"/></g>`,
		"fallback": "reicon:dollar-duotone",
	});
}

export default Component;
