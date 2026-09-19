import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awnixfbhk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awnixfbhk"/>`,
		"fallback": "icon-park-outline:file-hash",
	});
}

export default Component;
