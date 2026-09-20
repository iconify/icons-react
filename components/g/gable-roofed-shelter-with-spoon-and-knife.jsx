import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_mpl-t0u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_mpl-t0u"/>`,
		"fallback": "pinhead:gable-roofed-shelter-with-spoon-and-knife",
	});
}

export default Component;
