import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hajm5gbsc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hajm5gbsc"/>`,
		"fallback": "selfhst:github-dark",
	});
}

export default Component;
