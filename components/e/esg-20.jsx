import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkihj-w6g.css';
import '../../css/y/yhip1xbph.css';
import '../../css/y/yau-9gbzu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkihj-w6g"/><path class="yhip1xbph"/><path class="yau-9gbzu"/>`,
		"fallback": "energy-icons:esg-20",
	});
}

export default Component;
