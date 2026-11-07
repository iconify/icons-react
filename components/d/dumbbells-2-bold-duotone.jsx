import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzhk1zbhj.css';
import '../../css/a/ann86zbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzhk1zbhj"/><path class="ann86zbmg"/>`,
		"fallback": "solar:dumbbells-2-bold-duotone",
	});
}

export default Component;
