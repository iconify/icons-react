import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gknx1g06q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gknx1g06q st0"/>`,
		"fallback": "file-icons:brunch",
	});
}

export default Component;
