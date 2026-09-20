import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f6hli5bqg.css';
import '../../css/l/l11rddz2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="f6hli5bqg"/><path class="l11rddz2z"/></g>`,
		"fallback": "streamline-sharp-color:hierarchy-8-flat",
	});
}

export default Component;
