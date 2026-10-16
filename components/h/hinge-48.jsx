import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrkdbpk8l.css';
import '../../css/o/o63kjfrnf.css';
import '../../css/a/afjq858_y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrkdbpk8l"/><path class="o63kjfrnf"/><path class="afjq858_y"/>`,
		"fallback": "energy-icons:hinge-48",
	});
}

export default Component;
