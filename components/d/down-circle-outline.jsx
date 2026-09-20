import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi8hjkbam.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi8hjkbam"/>`,
		"fallback": "teenyicons:down-circle-outline",
	});
}

export default Component;
