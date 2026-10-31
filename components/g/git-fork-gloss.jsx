import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng1wjts8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng1wjts8f wm-k"/>`,
		"fallback": "withicons:git-fork-gloss",
	});
}

export default Component;
