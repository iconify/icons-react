import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj_kwrbir.css';
import '../../css/j/jaafzgbna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj_kwrbir"/><path class="jaafzgbna"/>`,
		"fallback": "solar:dumbbells-bold",
	});
}

export default Component;
