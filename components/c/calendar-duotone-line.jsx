import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukm9jj2re.css';
import '../../css/r/r5knwvbfg.css';
import '../../css/g/ga2yrzb2l.css';
import '../../css/x/xeoe4xbcq.css';
import '../../css/c/c781xr7yq.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4O3beeXG"><g class="ukm9jj2re"><path class="r5knwvbfg"/><rect class="ga2yrzb2l"/><path class="xeoe4xbcq"/><path class="c781xr7yq"/></g></mask></defs><path mask="url(#SVG4O3beeXG)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:calendar-duotone-line",
	});
}

export default Component;
