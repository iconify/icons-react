import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg22kut3v.css';
import '../../css/o/ojajqfjbc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg22kut3v"/><path class="ojajqfjbc"/>`,
		"fallback": "energy-icons:disconnector-48",
	});
}

export default Component;
