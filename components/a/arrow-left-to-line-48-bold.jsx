import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xexqeacnw.css';
import '../../css/m/mpc5lgr0k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xexqeacnw"/><path class="mpc5lgr0k"/>`,
		"fallback": "energy-icons:arrow-left-to-line-48-bold",
	});
}

export default Component;
