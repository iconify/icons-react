import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8orsp8wy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8orsp8wy"/>`,
		"fallback": "maki:college-15",
	});
}

export default Component;
