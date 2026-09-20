import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7_f_gx5j.css';
import '../../css/e/e4ubnueqe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7_f_gx5j"/><path class="e4ubnueqe"/>`,
		"fallback": "streamline-pixel:hand-fiist",
	});
}

export default Component;
