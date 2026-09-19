import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa0q_wbng.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa0q_wbng"/>`,
		"fallback": "whh:beer",
	});
}

export default Component;
