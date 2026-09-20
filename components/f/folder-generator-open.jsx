import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhjw5tknw.css';
import '../../css/i/iph07lbhe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhjw5tknw"/><path class="iph07lbhe"/>`,
		"fallback": "material-icon-theme:folder-generator-open",
	});
}

export default Component;
