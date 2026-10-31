import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anh4j2bjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anh4j2bjk"/>`,
		"fallback": "coolicons:arrow-u-turn-left-up-bulk-round",
	});
}

export default Component;
