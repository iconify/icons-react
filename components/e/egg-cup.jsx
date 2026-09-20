import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipimt7btm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipimt7btm"/>`,
		"fallback": "lucide-lab:egg-cup",
	});
}

export default Component;
