import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iem8b0w8t.css';
import '../../css/u/uj0j0q9an.css';
import '../../css/y/yy6ac35kt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iem8b0w8t"/><path clip-rule="evenodd" class="uj0j0q9an"/><path class="yy6ac35kt"/>`,
		"fallback": "lucide-extended:bandage-filled",
	});
}

export default Component;
