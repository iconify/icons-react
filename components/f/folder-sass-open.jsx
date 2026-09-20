import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhri5rpkp.css';
import '../../css/r/rr671wplb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhri5rpkp"/><path class="rr671wplb"/>`,
		"fallback": "material-icon-theme:folder-sass-open",
	});
}

export default Component;
