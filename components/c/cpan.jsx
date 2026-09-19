import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/weomk1dpt.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="weomk1dpt"/>`,
		"fallback": "file-icons:cpan",
	});
}

export default Component;
