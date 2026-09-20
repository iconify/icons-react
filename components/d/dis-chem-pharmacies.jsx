import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq3--4d3c.css';
import '../../css/a/abmezcb4l.css';
import '../../css/q/ql5xkwbzs.css';

const viewBox = {"width":1594,"height":1595};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq3--4d3c"/><path class="abmezcb4l"/><path class="ql5xkwbzs"/>`,
		"fallback": "thesvg-color:dis-chem-pharmacies",
	});
}

export default Component;
