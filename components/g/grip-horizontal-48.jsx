import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_szgrglp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_szgrglp"/>`,
		"fallback": "energy-icons:grip-horizontal-48",
	});
}

export default Component;
