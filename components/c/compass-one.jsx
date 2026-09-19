import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/tbyf68bpo.css';
import '../../css/c/cjud57b0f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="tbyf68bpo"/><path class="cjud57b0f"/></g>`,
		"fallback": "icon-park-outline:compass-one",
	});
}

export default Component;
