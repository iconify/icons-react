import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyvqlqxww.css';
import '../../css/a/axuu9gdaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyvqlqxww"/><path clip-rule="evenodd" class="axuu9gdaf"/>`,
		"fallback": "solar:exit-bold-duotone",
	});
}

export default Component;
