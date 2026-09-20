import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjj25p_6s.css';
import '../../css/m/m4c745b-x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjj25p_6s"/><path class="m4c745b-x"/>`,
		"fallback": "streamline-pixel:computers-devices-electronicsmicrochip-board",
	});
}

export default Component;
