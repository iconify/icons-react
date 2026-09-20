import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/owjk9o9eq.css';
import '../../css/a/a-hn66c-d.css';
import '../../css/x/xohw_uboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="owjk9o9eq"/><path class="a-hn66c-d"/><path class="xohw_uboc"/></g>`,
		"fallback": "streamline-freehand-color:amusement-park-ferris-wheel",
	});
}

export default Component;
