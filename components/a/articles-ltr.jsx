import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqhj42bcr.css';
import '../../css/l/lkmselk-n.css';
import '../../css/l/lsxdb1s3e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqhj42bcr"/><path class="lkmselk-n"/><path class="lsxdb1s3e"/>`,
		"fallback": "ooui:articles-ltr",
	});
}

export default Component;
