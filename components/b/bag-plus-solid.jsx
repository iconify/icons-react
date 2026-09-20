import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkch5_a1m.css';
import '../../css/j/j5118ebqg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkch5_a1m"/><path clip-rule="evenodd" class="j5118ebqg"/>`,
		"fallback": "teenyicons:bag-plus-solid",
	});
}

export default Component;
