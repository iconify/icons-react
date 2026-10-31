import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rdqo0gb5d.css';
import '../../css/d/d51bkaclb.css';
import '../../css/e/evqxh3uqv.css';
import '../../css/q/qtc9zuivn.css';
import '../../css/k/k90h_yb9k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rdqo0gb5d"/><path class="d51bkaclb"/><path class="evqxh3uqv"/><path class="qtc9zuivn"/><path class="k90h_yb9k"/></g>`,
		"fallback": "streamline-kameleon-color:camera-front-pop",
	});
}

export default Component;
