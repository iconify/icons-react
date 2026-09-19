import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbdwj-b8d.css';
import '../../css/c/czh-er49n.css';
import '../../css/n/n78tmpqhz.css';
import '../../css/e/e39ud6bwf.css';
import '../../css/j/jiw373bod.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbdwj-b8d"/><circle class="czh-er49n"/><circle class="n78tmpqhz"/><circle class="e39ud6bwf"/><path class="jiw373bod"/>`,
		"fallback": "carbon:ibm-watsonx-orchestrate",
	});
}

export default Component;
