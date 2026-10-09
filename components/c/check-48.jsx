import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p29i2lbbk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p29i2lbbk"/>`,
		"fallback": "energy-icons:check-48",
	});
}

export default Component;
