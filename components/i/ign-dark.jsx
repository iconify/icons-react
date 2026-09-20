import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs2fs5bky.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bs2fs5bky"/>`,
		"fallback": "selfhst:ign-dark",
	});
}

export default Component;
