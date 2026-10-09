import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqu5shbcg.css';
import '../../css/x/x_zkkvfvu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqu5shbcg"/><path class="x_zkkvfvu"/>`,
		"fallback": "energy-icons:api-48-bold",
	});
}

export default Component;
