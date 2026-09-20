import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2voi_5he.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u2voi_5he"/>`,
		"fallback": "teenyicons:brush-solid",
	});
}

export default Component;
