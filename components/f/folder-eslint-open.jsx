import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdn-nablh.css';
import '../../css/l/l4fpo9b9z.css';
import '../../css/z/z217erwyh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdn-nablh"/><path class="l4fpo9b9z"/><path class="z217erwyh"/>`,
		"fallback": "material-icon-theme:folder-eslint-open",
	});
}

export default Component;
