import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv6xttbku.css';

const viewBox = {"width":1024,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv6xttbku"/>`,
		"fallback": "whh:colors",
	});
}

export default Component;
