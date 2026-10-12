import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/az6csdqgz.css';
import '../../css/k/kmcgoyf5b.css';
import '../../css/j/jm1lb0omt.css';
import '../../css/d/dswk5-x-u.css';
import '../../css/s/s805e4aqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="az6csdqgz"/><path class="kmcgoyf5b"/><path class="jm1lb0omt"/><path class="dswk5-x-u"/><path class="s805e4aqh"/></g>`,
		"fallback": "lucide-extended:id-card-duotone",
	});
}

export default Component;
