import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgwq21n2c.css';
import '../../css/g/g4las-uut.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgwq21n2c"/><path class="g4las-uut"/>`,
		"fallback": "streamline-pixel:computers-devices-electronics-graphic-tablet",
	});
}

export default Component;
