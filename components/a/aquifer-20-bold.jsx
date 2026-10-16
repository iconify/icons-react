import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfnsa8bub.css';
import '../../css/u/u6s26w-eb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfnsa8bub"/><path class="u6s26w-eb"/>`,
		"fallback": "energy-icons:aquifer-20-bold",
	});
}

export default Component;
