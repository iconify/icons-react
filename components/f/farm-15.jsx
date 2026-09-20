import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sasqfv1ex.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sasqfv1ex"/>`,
		"fallback": "maki:farm-15",
	});
}

export default Component;
