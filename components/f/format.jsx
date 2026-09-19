import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/r/rqf9totdd.css';
import '../../css/g/gr588uavq.css';
import '../../css/s/sv-ds5b4v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="rqf9totdd"/><path class="gr588uavq"/><path class="sv-ds5b4v"/></g>`,
		"fallback": "icon-park-solid:format",
	});
}

export default Component;
