import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt0195bzq.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt0195bzq"/>`,
		"fallback": "websymbol:cog",
	});
}

export default Component;
