import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr_ri1bdf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rr_ri1bdf"/>`,
		"fallback": "pinhead:genie-lamp-with-stardust",
	});
}

export default Component;
