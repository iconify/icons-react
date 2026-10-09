import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlu1ghlpb.css';
import '../../css/r/run42fbat.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlu1ghlpb"/><path class="run42fbat"/>`,
		"fallback": "energy-icons:fishing-20-bold",
	});
}

export default Component;
