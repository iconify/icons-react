import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eaj8_bb5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eaj8_bb5h"/>`,
		"fallback": "tabler:brand-telegram",
	});
}

export default Component;
