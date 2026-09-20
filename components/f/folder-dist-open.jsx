import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co4jh6x4v.css';
import '../../css/c/c3tt83vyg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co4jh6x4v"/><path class="c3tt83vyg"/>`,
		"fallback": "material-icon-theme:folder-dist-open",
	});
}

export default Component;
