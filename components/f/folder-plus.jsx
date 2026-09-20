import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py86dxbyc.css';
import '../../css/k/km474465y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py86dxbyc"/><path clip-rule="evenodd" class="km474465y"/>`,
		"fallback": "stash:folder-plus",
	});
}

export default Component;
