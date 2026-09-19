import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r99wp1s3m.css';
import '../../css/h/h41dyrd2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r99wp1s3m"/><path class="h41dyrd2o"/>`,
		"fallback": "boxicons:bookmarks-filled",
	});
}

export default Component;
