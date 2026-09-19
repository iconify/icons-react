import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfwxb5b8a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gfwxb5b8a"/>`,
		"fallback": "gravity-ui:camera",
	});
}

export default Component;
