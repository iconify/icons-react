import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_8m4dn5e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r_8m4dn5e"/>`,
		"fallback": "streamline-block:basic-ui-add-2",
	});
}

export default Component;
