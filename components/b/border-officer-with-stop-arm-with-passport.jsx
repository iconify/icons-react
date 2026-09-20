import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhdzl1b5f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhdzl1b5f"/>`,
		"fallback": "pinhead:border-officer-with-stop-arm-with-passport",
	});
}

export default Component;
