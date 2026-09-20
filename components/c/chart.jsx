import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw0w95kpx.css';
import '../../css/b/b1gwc0q-o.css';
import '../../css/y/ymyomxbux.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw0w95kpx"/><path class="b1gwc0q-o"/><path class="ymyomxbux"/>`,
		"fallback": "iwwa:chart",
	});
}

export default Component;
