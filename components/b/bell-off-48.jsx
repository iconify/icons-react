import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7_cf1b6s.css';
import '../../css/l/liguc8hzg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7_cf1b6s"/><path class="liguc8hzg"/>`,
		"fallback": "energy-icons:bell-off-48",
	});
}

export default Component;
