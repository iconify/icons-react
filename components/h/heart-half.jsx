import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bapm2gryp.css';
import '../../css/k/kwvzbylod.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bapm2gryp"/><path class="kwvzbylod"/></g>`,
		"fallback": "glyphs-poly:heart-half",
	});
}

export default Component;
