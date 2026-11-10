import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnigs8hue.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnigs8hue"/>`,
		"fallback": "pinhead:bear-on-zoo-uppercase",
	});
}

export default Component;
