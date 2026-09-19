import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gnv5hp48c.css';
import '../../css/c/cdqyxub-y.css';
import '../../css/k/k53w0sboq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gnv5hp48c"/><path class="cdqyxub-y"/><path class="k53w0sboq"/></g>`,
		"fallback": "heroicons:cursor-arrow-ripple-20-solid",
	});
}

export default Component;
