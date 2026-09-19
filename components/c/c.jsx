import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1gqgyb9d.css';

const viewBox = {"width":455,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1gqgyb9d"/>`,
		"fallback": "file-icons:c",
	});
}

export default Component;
