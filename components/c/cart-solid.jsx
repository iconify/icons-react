import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw20fcbyu.css';
import '../../css/d/ds8m3ccms.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw20fcbyu"/><path clip-rule="evenodd" class="ds8m3ccms"/>`,
		"fallback": "teenyicons:cart-solid",
	});
}

export default Component;
