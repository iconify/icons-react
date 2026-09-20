import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru_ztdbjh.css';
import '../../css/p/pnudnz5ri.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru_ztdbjh"/><path class="pnudnz5ri"/>`,
		"fallback": "material-icon-theme:folder-windows",
	});
}

export default Component;
