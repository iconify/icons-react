import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6fe3tb3a.css';
import '../../css/j/jt3ln0bet.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6fe3tb3a"/><path class="jt3ln0bet"/>`,
		"fallback": "iwwa:add-1w",
	});
}

export default Component;
