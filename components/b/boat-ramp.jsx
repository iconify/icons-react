import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1br3obmn.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1br3obmn"/>`,
		"fallback": "map:boat-ramp",
	});
}

export default Component;
