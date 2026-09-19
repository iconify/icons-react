import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at92ugbnx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at92ugbnx"/>`,
		"fallback": "devicon-plain:datagrip",
	});
}

export default Component;
