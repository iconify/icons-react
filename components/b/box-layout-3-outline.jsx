import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jrpkb3kfl.css';
import '../../css/y/yitj2s91n.css';
import '../../css/o/ohvbfvvzq.css';
import '../../css/l/lg8zct3ui.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jrpkb3kfl"/><path class="yitj2s91n"/><path class="ohvbfvvzq"/><path class="lg8zct3ui"/></g>`,
		"fallback": "glyphs:box-layout-3-outline",
	});
}

export default Component;
