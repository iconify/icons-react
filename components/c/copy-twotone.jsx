import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro6hirbas.css';
import '../../css/o/o9_y2yslb.css';
import '../../css/y/y_23wccrq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro6hirbas"/><path class="o9_y2yslb"/><path class="y_23wccrq"/>`,
		"fallback": "ant-design:copy-twotone",
	});
}

export default Component;
