import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ou6l10jcd.css';
import '../../css/n/n1ivvpblw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="ou6l10jcd"/><path class="n1ivvpblw"/></g>`,
		"fallback": "charm:clipboard",
	});
}

export default Component;
