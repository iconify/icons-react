import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvqeztwih.css';
import '../../css/y/ylbwdpmem.css';
import '../../css/c/czi_nx33i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvqeztwih"/><path class="ylbwdpmem"/><path class="czi_nx33i"/>`,
		"fallback": "streamline-pixel:business-product-report-present-grahp",
	});
}

export default Component;
