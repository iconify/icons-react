import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m20rxt8mc.css';
import '../../css/p/pkcnx6ceq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m20rxt8mc"/><path class="pkcnx6ceq"/>`,
		"fallback": "streamline-pixel:content-files-open-book",
	});
}

export default Component;
