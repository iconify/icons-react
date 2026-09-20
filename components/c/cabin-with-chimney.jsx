import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk51rwbex.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk51rwbex"/>`,
		"fallback": "pinhead:cabin-with-chimney",
	});
}

export default Component;
