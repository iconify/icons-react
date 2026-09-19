import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozmjodl9a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozmjodl9a"/>`,
		"fallback": "codicon:bell-dot",
	});
}

export default Component;
