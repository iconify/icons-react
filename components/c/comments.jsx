import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6zz21_5c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v6zz21_5c"/>`,
		"fallback": "gravity-ui:comments",
	});
}

export default Component;
