import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6yzxzb0o.css';
import '../../css/k/kdqskdg1d.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6yzxzb0o"/><path class="kdqskdg1d"/>`,
		"fallback": "maki:car-repair-11",
	});
}

export default Component;
