import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd55jqb1l.css';
import '../../css/z/z7l2ccbgv.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd55jqb1l"/><path class="z7l2ccbgv"/>`,
		"fallback": "iwwa:co2",
	});
}

export default Component;
