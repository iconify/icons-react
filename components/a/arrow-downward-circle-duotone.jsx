import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmnjdabrt.css';
import '../../css/o/odh8gnbrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmnjdabrt"/><path class="odh8gnbrg"/>`,
		"fallback": "si:arrow-downward-circle-duotone",
	});
}

export default Component;
