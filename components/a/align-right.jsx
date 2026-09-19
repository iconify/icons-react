import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/e0g442bqd.css';
import '../../css/j/j8h2kzamk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect class="e0g442bqd"/><path class="j8h2kzamk"/></g>`,
		"fallback": "icon-park:align-right",
	});
}

export default Component;
