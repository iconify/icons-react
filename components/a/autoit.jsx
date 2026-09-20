import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q87qb_bje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q87qb_bje"/>`,
		"fallback": "material-icon-theme:autoit",
	});
}

export default Component;
