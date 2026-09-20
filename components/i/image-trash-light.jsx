import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw50y7rwg.css';
import '../../css/e/ec0iwibgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw50y7rwg"/><path class="ec0iwibgb"/>`,
		"fallback": "stash:image-trash-light",
	});
}

export default Component;
