import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxv7fm38f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxv7fm38f"/>`,
		"fallback": "selfhst:ace-stream-dark",
	});
}

export default Component;
