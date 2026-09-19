import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qfdcx75ii.css';
import '../../css/u/ujjw328am.css';
import '../../css/h/h73hhs93v.css';
import '../../css/g/gh-38ib2j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qfdcx75ii"/><path clip-rule="evenodd" class="ujjw328am"/><path class="h73hhs93v"/><path clip-rule="evenodd" class="gh-38ib2j"/></g>`,
		"fallback": "glyphs:buildings-outline",
	});
}

export default Component;
