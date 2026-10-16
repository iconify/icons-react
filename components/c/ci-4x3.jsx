import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kniu2ethu.css';
import '../../css/a/au3sbgbky.css';
import '../../css/j/j--hi9baf.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kniu2ethu"/><path class="au3sbgbky"/><path class="j--hi9baf"/></g>`,
		"fallback": "flag:ci-4x3",
	});
}

export default Component;
