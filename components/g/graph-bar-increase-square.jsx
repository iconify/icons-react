import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xyxefdb9k.css';
import '../../css/c/csxsy-bui.css';
import '../../css/f/fvqv2vmtf.css';
import '../../css/u/uv0lambts.css';
import '../../css/i/imxzhfbuz.css';
import '../../css/z/zz7zurb0q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xyxefdb9k"/><path class="csxsy-bui"/><path class="fvqv2vmtf"/><path class="uv0lambts"/><path class="imxzhfbuz"/><path class="zz7zurb0q"/></g>`,
		"fallback": "streamline-flex-color:graph-bar-increase-square",
	});
}

export default Component;
