import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7v9i8ifs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7v9i8ifs"/>`,
		"fallback": "dashicons:admin-home",
	});
}

export default Component;
