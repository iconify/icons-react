import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-i9hpw_f.css';
import '../../css/l/l6_kf7bqk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG9KUSnd8v" class="t-i9hpw_f"/></defs><path class="l6_kf7bqk"/><use href="#SVG9KUSnd8v"/><use href="#SVG9KUSnd8v"/>`,
		"fallback": "material-icon-theme:folder-css",
	});
}

export default Component;
