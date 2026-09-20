import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dhnamgxwy.css';
import '../../css/b/b6chai49q.css';
import '../../css/s/sg9dij81a.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhLq0x4BW"><g class="ft5dv1b6b"><path class="dhnamgxwy"/><path class="b6chai49q"/><path clip-rule="evenodd" class="sg9dij81a"/></g></mask></defs><path mask="url(#SVGhLq0x4BW)" class="w49j0rbvv"/>`,
		"fallback": "solar:accumulator-bold",
	});
}

export default Component;
