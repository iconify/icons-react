import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bocfkcb9c.css';
import '../../css/p/pi8mxsaiw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bocfkcb9c"/><path clip-rule="evenodd" class="pi8mxsaiw"/>`,
		"fallback": "heroicons:currency-dollar-16-solid",
	});
}

export default Component;
