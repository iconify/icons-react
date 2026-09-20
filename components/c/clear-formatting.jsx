import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg5639b4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg5639b4w"/>`,
		"fallback": "tabler:clear-formatting",
	});
}

export default Component;
