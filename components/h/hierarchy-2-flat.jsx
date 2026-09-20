import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sglni4p3z.css';
import '../../css/j/ja96vut3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sglni4p3z"/><path class="ja96vut3x"/></g>`,
		"fallback": "streamline-sharp-color:hierarchy-2-flat",
	});
}

export default Component;
