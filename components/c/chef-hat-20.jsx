import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uczxtfbti.css';
import '../../css/p/p1cx38bqa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uczxtfbti"/><path class="p1cx38bqa"/>`,
		"fallback": "energy-icons:chef-hat-20",
	});
}

export default Component;
