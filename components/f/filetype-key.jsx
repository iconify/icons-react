import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he0zjtgwt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he0zjtgwt"/>`,
		"fallback": "bi:filetype-key",
	});
}

export default Component;
