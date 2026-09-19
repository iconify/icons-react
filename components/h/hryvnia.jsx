import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee4ldtbfq.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee4ldtbfq"/>`,
		"fallback": "whh:hryvnia",
	});
}

export default Component;
