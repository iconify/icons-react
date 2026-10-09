import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da2byub9q.css';
import '../../css/c/c5u4wmg9r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da2byub9q"/><path class="c5u4wmg9r"/>`,
		"fallback": "energy-icons:heading-48",
	});
}

export default Component;
