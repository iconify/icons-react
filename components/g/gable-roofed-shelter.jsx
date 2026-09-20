import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtv-45bls.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtv-45bls"/>`,
		"fallback": "pinhead:gable-roofed-shelter",
	});
}

export default Component;
