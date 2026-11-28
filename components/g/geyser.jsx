import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2ijpj_lp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2ijpj_lp"/>`,
		"fallback": "pinhead:geyser",
	});
}

export default Component;
