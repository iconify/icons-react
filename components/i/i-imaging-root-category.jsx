import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aml4e2bhz.css';
import '../../css/o/oge-yxbcn.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aml4e2bhz"/><path class="oge-yxbcn"/>`,
		"fallback": "medical-icon:i-imaging-root-category",
	});
}

export default Component;
