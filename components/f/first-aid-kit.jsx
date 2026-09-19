import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/astn9tk8w.css';
import '../../css/e/etwwuac6b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="astn9tk8w"/><path class="etwwuac6b"/>`,
		"fallback": "ep:first-aid-kit",
	});
}

export default Component;
