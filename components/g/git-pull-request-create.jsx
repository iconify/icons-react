import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck96j1e1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck96j1e1s"/>`,
		"fallback": "keyline-icons:git-pull-request-create",
	});
}

export default Component;
