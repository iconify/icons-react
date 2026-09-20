import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz-kgxbko.css';
import '../../css/b/bjzxtacce.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz-kgxbko"/><path class="bjzxtacce"/>`,
		"fallback": "selfhst:filegator-dark",
	});
}

export default Component;
