import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4la0lb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4la0lb4w"/>`,
		"fallback": "tabler:brand-ember",
	});
}

export default Component;
