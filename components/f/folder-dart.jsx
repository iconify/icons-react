import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru_ztdbjh.css';
import '../../css/b/b_qmrc7sq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru_ztdbjh"/><path class="b_qmrc7sq"/>`,
		"fallback": "material-icon-theme:folder-dart",
	});
}

export default Component;
