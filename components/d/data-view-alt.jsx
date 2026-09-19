import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgmhddevn.css';
import '../../css/p/pw47icbmy.css';
import '../../css/c/cb4hdplqd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="lgmhddevn"/><path class="pw47icbmy"/><path class="cb4hdplqd"/>`,
		"fallback": "carbon:data-view-alt",
	});
}

export default Component;
