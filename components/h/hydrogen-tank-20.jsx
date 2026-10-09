import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yght1vonp.css';
import '../../css/s/s1qzz4b8q.css';
import '../../css/f/fj5yv9btn.css';
import '../../css/o/o9z99rbik.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yght1vonp"/><path class="s1qzz4b8q"/><path class="fj5yv9btn"/><path class="o9z99rbik"/>`,
		"fallback": "energy-icons:hydrogen-tank-20",
	});
}

export default Component;
