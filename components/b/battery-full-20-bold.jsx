import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgrnoabib.css';
import '../../css/k/kjish1bii.css';
import '../../css/l/l826gn27u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgrnoabib"/><path class="kjish1bii"/><path class="l826gn27u"/>`,
		"fallback": "energy-icons:battery-full-20-bold",
	});
}

export default Component;
