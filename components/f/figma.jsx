import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gksx-9i4n.css';

const viewBox = {"width":340,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gksx-9i4n"/>`,
		"fallback": "file-icons:figma",
	});
}

export default Component;
