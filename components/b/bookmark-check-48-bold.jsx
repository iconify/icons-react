import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7ue9wb8n.css';
import '../../css/s/shuuz6bqy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7ue9wb8n"/><path class="shuuz6bqy"/>`,
		"fallback": "energy-icons:bookmark-check-48-bold",
	});
}

export default Component;
