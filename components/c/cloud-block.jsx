import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/an_mlb32z.css';
import '../../css/m/mk7yxyjzl.css';
import '../../css/f/fle9pybiz.css';
import '../../css/k/k5goikzcf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="an_mlb32z"/><path class="mk7yxyjzl"/><path class="fle9pybiz"/><path class="k5goikzcf"/></g>`,
		"fallback": "streamline-color:cloud-block",
	});
}

export default Component;
