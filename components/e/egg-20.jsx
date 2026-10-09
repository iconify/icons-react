import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfzpr-bpb.css';
import '../../css/v/vllkojbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfzpr-bpb"/><path class="vllkojbri"/>`,
		"fallback": "energy-icons:egg-20",
	});
}

export default Component;
