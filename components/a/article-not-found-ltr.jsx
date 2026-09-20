import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgnmrjbgl.css';
import '../../css/p/p27qq8biq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgnmrjbgl"/><path class="p27qq8biq"/>`,
		"fallback": "ooui:article-not-found-ltr",
	});
}

export default Component;
