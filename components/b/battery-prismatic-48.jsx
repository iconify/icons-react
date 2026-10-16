import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o89debbzw.css';
import '../../css/l/lm68pefyu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o89debbzw"/><path class="lm68pefyu"/>`,
		"fallback": "energy-icons:battery-prismatic-48",
	});
}

export default Component;
