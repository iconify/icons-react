import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/io1ebq64u.css';
import '../../css/x/xsvufvivd.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="io1ebq64u"/><path class="xsvufvivd"/></g>`,
		"fallback": "flagpack:gb",
	});
}

export default Component;
