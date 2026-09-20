import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb1wavm9k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb1wavm9k"/>`,
		"fallback": "selfhst:atlasnode-dark",
	});
}

export default Component;
