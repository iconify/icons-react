import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbv3kq73b.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbv3kq73b"/>`,
		"fallback": "devicon-plain:gitlab-wordmark",
	});
}

export default Component;
