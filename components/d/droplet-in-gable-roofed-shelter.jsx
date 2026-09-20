import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m78btob1b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m78btob1b"/>`,
		"fallback": "pinhead:droplet-in-gable-roofed-shelter",
	});
}

export default Component;
