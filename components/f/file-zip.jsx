import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xunbskfrx.css';
import '../../css/t/t756e-aqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xunbskfrx"/><path class="t756e-aqg"/>`,
		"fallback": "boxicons:file-zip",
	});
}

export default Component;
