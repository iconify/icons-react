import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri8oai9ww.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri8oai9ww"/>`,
		"fallback": "fa6-solid:clipboard-question",
	});
}

export default Component;
