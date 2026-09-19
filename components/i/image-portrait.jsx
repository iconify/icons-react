import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga6454bvx.css';
import '../../css/o/oj97bgbfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga6454bvx"/><path class="oj97bgbfh"/>`,
		"fallback": "boxicons:image-portrait",
	});
}

export default Component;
