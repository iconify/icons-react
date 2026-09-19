import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zkcw2kbie.css';
import '../../css/l/lzkxalu7d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zkcw2kbie"/><path class="lzkxalu7d"/></g>`,
		"fallback": "glyphs:baseball-1-outline",
	});
}

export default Component;
