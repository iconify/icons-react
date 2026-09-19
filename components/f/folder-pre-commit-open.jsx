import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1crshb5u.css';
import '../../css/q/qy_pj4bzp.css';
import '../../css/k/kqa5ceb9f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1crshb5u"/><rect transform="rotate(-45.004)" class="qy_pj4bzp"/><path class="kqa5ceb9f"/>`,
		"fallback": "catppuccin:folder-pre-commit-open",
	});
}

export default Component;
