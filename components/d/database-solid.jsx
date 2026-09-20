import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj8uj2zta.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xj8uj2zta"/>`,
		"fallback": "teenyicons:database-solid",
	});
}

export default Component;
