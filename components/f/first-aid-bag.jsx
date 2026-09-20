import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw8qkhr5t.css';
import '../../css/w/wt0hjgbht.css';
import '../../css/k/kuycmfbxw.css';
import '../../css/a/aljyvwb8e.css';
import '../../css/h/hv37hybeo.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw8qkhr5t"/><path class="wt0hjgbht"/><path class="kuycmfbxw"/><path class="aljyvwb8e"/><path class="hv37hybeo"/>`,
		"fallback": "openmoji:first-aid-bag",
	});
}

export default Component;
