import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m223cpbhr.css';
import '../../css/p/pr_1mzb5o.css';
import '../../css/c/cc-gngndl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m223cpbhr"/><circle class="pr_1mzb5o"/><path class="cc-gngndl"/>`,
		"fallback": "carbon:api-key",
	});
}

export default Component;
