import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/m/m-8maggzp.css';
import '../../css/h/hi4zbii8j.css';
import '../../css/h/hco4yqb6k.css';
import '../../css/a/a25kz8bfm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="m-8maggzp"/><path class="hi4zbii8j"/></g><path clip-rule="evenodd" class="hco4yqb6k"/><path clip-rule="evenodd" class="a25kz8bfm"/></g>`,
		"fallback": "pepicons:fast-forward-print",
	});
}

export default Component;
