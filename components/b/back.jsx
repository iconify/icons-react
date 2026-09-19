import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akt37cc3o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="akt37cc3o"/>`,
		"fallback": "icon-park-outline:back",
	});
}

export default Component;
