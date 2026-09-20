import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpuz2vn1g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cpuz2vn1g"/>`,
		"fallback": "ix:application-screens",
	});
}

export default Component;
