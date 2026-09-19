import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4keo0bzk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4keo0bzk"/>`,
		"fallback": "fluent-mdl2:college-hoops",
	});
}

export default Component;
