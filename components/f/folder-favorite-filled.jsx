import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8r0cqbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8r0cqbpj"/>`,
		"fallback": "reicon:folder-favorite-filled",
	});
}

export default Component;
