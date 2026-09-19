import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gyf0ee2rr.css';
import '../../css/g/gofpikhwp.css';
import '../../css/a/azg3zbcbt.css';
import '../../css/y/y6pici8-g.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gyf0ee2rr"/><path class="gofpikhwp"/><path class="azg3zbcbt"/><path class="y6pici8-g"/></g>`,
		"fallback": "flagpack:gh",
	});
}

export default Component;
