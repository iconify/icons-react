import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z01ndpwmx.css';
import '../../css/q/qvqjn5baw.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z01ndpwmx"/><path class="qvqjn5baw"/>`,
		"fallback": "maki:furniture-11",
	});
}

export default Component;
