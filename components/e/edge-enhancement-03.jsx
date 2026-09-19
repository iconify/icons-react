import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9vytybdg.css';
import '../../css/b/bj4qidbex.css';
import '../../css/y/yfd9ljbcs.css';
import '../../css/h/h127emb3b.css';
import '../../css/l/l7worlosa.css';
import '../../css/o/oz0srxb4e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9vytybdg"/><path class="bj4qidbex"/><path class="yfd9ljbcs"/><path class="h127emb3b"/><path class="l7worlosa"/><path class="oz0srxb4e"/>`,
		"fallback": "carbon:edge-enhancement-03",
	});
}

export default Component;
