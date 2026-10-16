import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alk5rr8yk.css';
import '../../css/p/pwnej6bjy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alk5rr8yk"/><path class="pwnej6bjy"/>`,
		"fallback": "energy-icons:icicles-48-bold",
	});
}

export default Component;
