import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhjw5tknw.css';
import '../../css/a/a98ziyr1h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhjw5tknw"/><path class="a98ziyr1h"/>`,
		"fallback": "material-icon-theme:folder-scons-open",
	});
}

export default Component;
