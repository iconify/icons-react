import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zny7zrb3c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zny7zrb3c"/>`,
		"fallback": "nimbus:arrows-horizontal",
	});
}

export default Component;
