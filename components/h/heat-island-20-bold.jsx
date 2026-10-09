import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_695na3e.css';
import '../../css/b/b3-608noy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_695na3e"/><path class="b3-608noy"/>`,
		"fallback": "energy-icons:heat-island-20-bold",
	});
}

export default Component;
