import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbwdkyb9i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbwdkyb9i"/>`,
		"fallback": "selfhst:bitbucket-light",
	});
}

export default Component;
