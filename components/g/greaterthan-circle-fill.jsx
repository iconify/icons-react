import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmflyqb6p.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmflyqb6p"/>`,
		"fallback": "f7:greaterthan-circle-fill",
	});
}

export default Component;
