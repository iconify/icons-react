import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd0oqeb7g.css';
import '../../css/u/uvsy0xydv.css';
import '../../css/u/uq2nvxbgs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd0oqeb7g"/><path class="uvsy0xydv"/><path class="uq2nvxbgs"/>`,
		"fallback": "carbon:arrow-annotation",
	});
}

export default Component;
