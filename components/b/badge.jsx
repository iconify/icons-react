import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xar5kfbwv.css';
import '../../css/c/c36bb3bek.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xar5kfbwv"/><path class="c36bb3bek"/></g>`,
		"fallback": "glyphs-poly:badge",
	});
}

export default Component;
