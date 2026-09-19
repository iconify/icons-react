import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bltctjbtf.css';

const viewBox = {"width":559,"height":671};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bltctjbtf"/>`,
		"fallback": "ls:e",
	});
}

export default Component;
