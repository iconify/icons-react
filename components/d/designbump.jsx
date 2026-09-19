import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0thd4b-f.css';

const viewBox = {"width":360,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0thd4b-f"/>`,
		"fallback": "ps:designbump",
	});
}

export default Component;
