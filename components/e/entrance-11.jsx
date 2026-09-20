import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cld0m4bvp.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cld0m4bvp"/>`,
		"fallback": "maki:entrance-11",
	});
}

export default Component;
