import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsgld8g3i.css';
import '../../css/t/tehcrdk0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsgld8g3i"/><path clip-rule="evenodd" class="tehcrdk0c"/>`,
		"fallback": "si:dollar-alt-1-fill",
	});
}

export default Component;
