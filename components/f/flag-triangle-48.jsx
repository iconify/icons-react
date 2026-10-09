import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-0gtd2mz.css';
import '../../css/f/f79__7b6k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-0gtd2mz"/><path class="f79__7b6k"/>`,
		"fallback": "energy-icons:flag-triangle-48",
	});
}

export default Component;
