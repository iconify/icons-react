import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwcpavbfl.css';
import '../../css/v/vcbhgbcuw.css';
import '../../css/r/r9oealbdj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwcpavbfl"/><path class="vcbhgbcuw"/><path class="r9oealbdj"/>`,
		"fallback": "energy-icons:hydrogen-ship-20-bold",
	});
}

export default Component;
