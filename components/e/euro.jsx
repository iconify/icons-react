import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-91hf9-a.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-91hf9-a"/>`,
		"fallback": "foundation:euro",
	});
}

export default Component;
