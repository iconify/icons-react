import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzp1g281f.css';
import '../../css/q/qw5zwyaky.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzp1g281f"/><path class="qw5zwyaky"/>`,
		"fallback": "energy-icons:dice-5-48-bold",
	});
}

export default Component;
