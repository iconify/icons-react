import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-e56suxy.css';
import '../../css/g/gjx1o8bfz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-e56suxy"/><path clip-rule="evenodd" class="gjx1o8bfz"/>`,
		"fallback": "teenyicons:file-no-access-solid",
	});
}

export default Component;
