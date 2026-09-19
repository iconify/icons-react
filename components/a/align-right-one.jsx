import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/g/g5oougblb.css';
import '../../css/v/vwqc5r-hj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="g5oougblb"/><path class="vwqc5r-hj"/></g>`,
		"fallback": "icon-park-outline:align-right-one",
	});
}

export default Component;
