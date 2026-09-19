import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp4nthbbu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp4nthbbu"/>`,
		"fallback": "icon-park-outline:bytedance-applets",
	});
}

export default Component;
