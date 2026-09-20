import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjlzt-g3f.css';
import '../../css/t/t5c3kxbue.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjlzt-g3f"/><path class="t5c3kxbue"/>`,
		"fallback": "iwwa:arrow-left",
	});
}

export default Component;
