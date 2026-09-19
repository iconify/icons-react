import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqbxe7b6a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqbxe7b6a"/>`,
		"fallback": "file-icons:eclipse-lang",
	});
}

export default Component;
