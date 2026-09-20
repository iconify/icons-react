import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq2r9vbex.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lq2r9vbex"/>`,
		"fallback": "lsicon:checkbox-filled",
	});
}

export default Component;
