import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek96gn5sw.css';
import '../../css/y/yfluzxblp.css';
import '../../css/c/cn9haht9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek96gn5sw"/><path class="yfluzxblp"/><path class="cn9haht9b"/>`,
		"fallback": "gcp:cloud-composer",
	});
}

export default Component;
