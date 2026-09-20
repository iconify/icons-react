import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xotmi9s3j.css';
import '../../css/z/zp9o7jbax.css';
import '../../css/y/y3-63wbqa.css';
import '../../css/g/g9q_05mlr.css';
import '../../css/x/xz-t-ab9k.css';
import '../../css/y/yv8vo0bzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xotmi9s3j"/><path class="zp9o7jbax"/><path class="y3-63wbqa"/><path class="g9q_05mlr"/><path class="xz-t-ab9k"/><path clip-rule="evenodd" class="yv8vo0bzd"/></g>`,
		"fallback": "solar:eye-scan-bold",
	});
}

export default Component;
