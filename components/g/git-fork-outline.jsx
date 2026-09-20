import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwkw_ebhe.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwkw_ebhe"/>`,
		"fallback": "teenyicons:git-fork-outline",
	});
}

export default Component;
