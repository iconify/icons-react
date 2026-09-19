import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzf88t2wq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzf88t2wq"/>`,
		"fallback": "iconoir:code-brackets",
	});
}

export default Component;
