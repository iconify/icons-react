import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za9cmqb_d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za9cmqb_d"/>`,
		"fallback": "pinhead:condom",
	});
}

export default Component;
