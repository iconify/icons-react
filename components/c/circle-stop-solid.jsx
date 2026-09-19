import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofgvpcc8w.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofgvpcc8w"/>`,
		"fallback": "fluent-mdl2:circle-stop-solid",
	});
}

export default Component;
