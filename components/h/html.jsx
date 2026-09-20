import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-ez5do3d.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-ez5do3d"/>`,
		"fallback": "picon:html",
	});
}

export default Component;
