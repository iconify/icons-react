import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gxzbgobiv.css';
import '../../css/d/dzfojk_yo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gxzbgobiv"/><path class="dzfojk_yo"/></g>`,
		"fallback": "glyphs:chart-line-1-duo",
	});
}

export default Component;
