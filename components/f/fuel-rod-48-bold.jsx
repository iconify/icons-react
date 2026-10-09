import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj3ip275j.css';
import '../../css/k/kumpysh-p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj3ip275j"/><path class="kumpysh-p"/>`,
		"fallback": "energy-icons:fuel-rod-48-bold",
	});
}

export default Component;
