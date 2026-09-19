import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo0c_kb7l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="mo0c_kb7l"/>`,
		"fallback": "carbon:circle-solid",
	});
}

export default Component;
