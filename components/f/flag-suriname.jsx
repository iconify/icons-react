import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/z/zqz2207hd.css';
import '../../css/h/hjszcto5m.css';
import '../../css/g/gzvmszbho.css';
import '../../css/u/uwqnao-jq.css';
import '../../css/b/bae1lf31b.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="zqz2207hd"/><path class="hjszcto5m"/><path class="gzvmszbho"/><path class="uwqnao-jq"/><path class="bae1lf31b"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-suriname",
	});
}

export default Component;
