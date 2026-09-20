import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l32lerbfx.css';
import '../../css/v/v-975mjhv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l32lerbfx"/><path class="v-975mjhv"/>`,
		"fallback": "material-icon-theme:folder-lua-open",
	});
}

export default Component;
