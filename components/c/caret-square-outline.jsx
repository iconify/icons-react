import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yev7me0jl.css';
import '../../css/f/f62c1c24i.css';
import '../../css/h/h71ihjbka.css';
import '../../css/x/x7ikojbpe.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yev7me0jl"/><path class="f62c1c24i"/><path class="h71ihjbka"/><path class="x7ikojbpe"/></g>`,
		"fallback": "glyphs:caret-square-outline",
	});
}

export default Component;
