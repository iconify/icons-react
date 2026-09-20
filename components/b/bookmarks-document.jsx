import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bpcgv21fa.css';
import '../../css/o/ox4faubrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bpcgv21fa"/><path class="ox4faubrz"/></g>`,
		"fallback": "streamline-ultimate:bookmarks-document",
	});
}

export default Component;
