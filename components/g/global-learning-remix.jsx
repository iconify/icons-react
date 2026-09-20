import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3kcvrbbq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u3kcvrbbq"/>`,
		"fallback": "streamline-plump:global-learning-remix",
	});
}

export default Component;
