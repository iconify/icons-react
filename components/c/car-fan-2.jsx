import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-txrhc0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-txrhc0n"/>`,
		"fallback": "tabler:car-fan-2",
	});
}

export default Component;
