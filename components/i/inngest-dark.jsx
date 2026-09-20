import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb2av2t2v.css';

const viewBox = {"width":100,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wb2av2t2v"/>`,
		"fallback": "thesvg-color:inngest-dark",
	});
}

export default Component;
