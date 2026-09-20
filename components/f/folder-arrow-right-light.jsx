import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgdtghb6t.css';
import '../../css/t/tm3vgc7aa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgdtghb6t"/><path clip-rule="evenodd" class="tm3vgc7aa"/>`,
		"fallback": "stash:folder-arrow-right-light",
	});
}

export default Component;
