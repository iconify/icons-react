import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajqbxzbxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajqbxzbxv primary"/>`,
		"fallback": "iconaut:arrow-up-to-line-duotone",
	});
}

export default Component;
