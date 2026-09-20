import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1___qv1l.css';
import '../../css/l/lsxdb1s3e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1___qv1l"/><path class="lsxdb1s3e"/>`,
		"fallback": "ooui:articles-search-ltr",
	});
}

export default Component;
