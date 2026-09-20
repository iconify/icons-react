import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7wzorbif.css';
import '../../css/t/tsvbfvbzz.css';
import '../../css/u/uzff1nbwh.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7wzorbif"/><path class="tsvbfvbzz"/><path class="uzff1nbwh"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-pakistan",
	});
}

export default Component;
