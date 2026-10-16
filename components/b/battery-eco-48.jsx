import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvdhc8bfy.css';
import '../../css/d/dnfd7hb8j.css';
import '../../css/x/xob-pibov.css';
import '../../css/l/l7slkbcki.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvdhc8bfy"/><path class="dnfd7hb8j"/><path class="xob-pibov"/><path class="l7slkbcki"/>`,
		"fallback": "energy-icons:battery-eco-48",
	});
}

export default Component;
