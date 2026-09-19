import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj7pqvbdz.css';
import '../../css/s/s0pa6pmmf.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj7pqvbdz"/><path class="s0pa6pmmf"/>`,
		"fallback": "clarity:first-aid-kit-line",
	});
}

export default Component;
