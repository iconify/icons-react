import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz-t35b6b.css';

const viewBox = {"width":392,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz-t35b6b"/>`,
		"fallback": "ps:down",
	});
}

export default Component;
