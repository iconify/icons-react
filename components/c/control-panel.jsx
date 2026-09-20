import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qivazt3xq.css';
import '../../css/h/hwkz_mbiu.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qivazt3xq"/><path class="hwkz_mbiu"/>`,
		"fallback": "lineicons:control-panel",
	});
}

export default Component;
