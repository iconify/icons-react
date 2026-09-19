import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e671b-nra.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e671b-nra"/>`,
		"fallback": "el:blogger",
	});
}

export default Component;
