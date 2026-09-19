import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/as0w28onq.css';
import '../../css/t/twf8fpbac.css';
import '../../css/v/v8mm5-b4t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="as0w28onq"/><path clip-rule="evenodd" class="twf8fpbac"/><path class="v8mm5-b4t"/></g>`,
		"fallback": "glyphs:globe-africa-bold",
	});
}

export default Component;
