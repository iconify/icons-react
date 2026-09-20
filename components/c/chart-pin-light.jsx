import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/t/tz9-5ubyh.css';
import '../../css/h/h2fe-ksvz.css';
import '../../css/g/g38jmdb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="tz9-5ubyh"/><path class="h2fe-ksvz"/><circle class="g38jmdb2i"/></g>`,
		"fallback": "lets-icons:chart-pin-light",
	});
}

export default Component;
