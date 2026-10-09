import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve7dckibf.css';
import '../../css/d/dl48ttr9l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve7dckibf"/><path class="dl48ttr9l"/>`,
		"fallback": "energy-icons:hair-dryer-48-bold",
	});
}

export default Component;
