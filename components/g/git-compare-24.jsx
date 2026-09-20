import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwvqjfwul.css';
import '../../css/h/he6gs9bkw.css';
import '../../css/p/prs_noded.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwvqjfwul"/><path class="he6gs9bkw"/><path class="prs_noded"/>`,
		"fallback": "octicon:git-compare-24",
	});
}

export default Component;
