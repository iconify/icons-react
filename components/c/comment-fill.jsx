import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtb49rb_c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xtb49rb_c"/>`,
		"fallback": "gravity-ui:comment-fill",
	});
}

export default Component;
