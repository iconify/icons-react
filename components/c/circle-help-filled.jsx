import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5tc0hb0o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m5tc0hb0o"/>`,
		"fallback": "lsicon:circle-help-filled",
	});
}

export default Component;
