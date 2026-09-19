import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-fm_yoxj.css';

const viewBox = {"width":304,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-fm_yoxj"/>`,
		"fallback": "zmdi:format-quote",
	});
}

export default Component;
