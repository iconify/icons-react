import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwcuq-bwx.css';
import '../../css/d/dcwqgdbua.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwcuq-bwx"/><path class="dcwqgdbua"/>`,
		"fallback": "selfhst:ghostfolio",
	});
}

export default Component;
