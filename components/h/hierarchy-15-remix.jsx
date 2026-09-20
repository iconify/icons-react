import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg7s50srv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rg7s50srv"/>`,
		"fallback": "streamline-plump:hierarchy-15-remix",
	});
}

export default Component;
