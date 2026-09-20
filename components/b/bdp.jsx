import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-3k_lb1q.css';
import '../../css/a/a0u305bhu.css';
import '../../css/e/ewy3v6o-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-3k_lb1q"/><path class="a0u305bhu"/><path class="ewy3v6o-c"/>`,
		"fallback": "token:bdp",
	});
}

export default Component;
