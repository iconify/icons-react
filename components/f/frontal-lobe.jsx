import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xelnbxbbd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xelnbxbbd"/>`,
		"fallback": "game-icons:frontal-lobe",
	});
}

export default Component;
