import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhyma36tc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bhyma36tc"/>`,
		"fallback": "iconoir:arrow-down-left-circle-solid",
	});
}

export default Component;
