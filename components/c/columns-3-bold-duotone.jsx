import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2-x-cbeh.css';
import '../../css/q/qykqcq_5w.css';
import '../../css/g/gyjvu3nrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2-x-cbeh"/><path class="qykqcq_5w"/><path class="gyjvu3nrz"/>`,
		"fallback": "solar:columns-3-bold-duotone",
	});
}

export default Component;
