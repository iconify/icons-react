import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vphieacec.css';
import '../../css/q/qt2dups9g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vphieacec"/><path class="qt2dups9g"/>`,
		"fallback": "energy-icons:fuel-rod-48",
	});
}

export default Component;
