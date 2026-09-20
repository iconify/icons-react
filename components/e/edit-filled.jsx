import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stica__rp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="stica__rp"/>`,
		"fallback": "lsicon:edit-filled",
	});
}

export default Component;
