import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xt5jzrbfu.css';
import '../../css/o/o04_5wrsd.css';
import '../../css/k/k8b-p3jys.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xt5jzrbfu"/><path class="o04_5wrsd"/><path class="k8b-p3jys"/></g>`,
		"fallback": "fluent-emoji-high-contrast:eye",
	});
}

export default Component;
