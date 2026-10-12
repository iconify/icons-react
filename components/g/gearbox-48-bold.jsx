import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg03hcbot.css';
import '../../css/y/ybe7dm20u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg03hcbot"/><path class="ybe7dm20u"/>`,
		"fallback": "energy-icons:gearbox-48-bold",
	});
}

export default Component;
