import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_q1xdzts.css';
import '../../css/o/ogmfbzzzw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_q1xdzts"/><path class="ogmfbzzzw"/>`,
		"fallback": "carbon:deploy",
	});
}

export default Component;
