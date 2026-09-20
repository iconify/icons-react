import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7kzzzk4x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7kzzzk4x"/>`,
		"fallback": "maki:casino-15",
	});
}

export default Component;
