import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2sigkb1m.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2sigkb1m"/>`,
		"fallback": "fluent-mdl2:add-to",
	});
}

export default Component;
