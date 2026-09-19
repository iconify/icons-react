import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he_05f72i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="he_05f72i"/>`,
		"fallback": "iconoir:cable-tag-solid",
	});
}

export default Component;
