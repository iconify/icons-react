import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7z7izt0q.css';
import '../../css/m/mvvtxab3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="p7z7izt0q"/><path class="mvvtxab3j"/>`,
		"fallback": "bx:bxl-microsoft-teams",
	});
}

export default Component;
