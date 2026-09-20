import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jih5fdbhq.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jih5fdbhq"/>`,
		"fallback": "memory:archive",
	});
}

export default Component;
