import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0hz00p_x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d0hz00p_x"/>`,
		"fallback": "gravity-ui:file-plus",
	});
}

export default Component;
