import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/majnp3bsu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="majnp3bsu"/>`,
		"fallback": "teenyicons:border-bottom-solid",
	});
}

export default Component;
