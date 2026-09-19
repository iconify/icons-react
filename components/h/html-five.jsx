import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/o/oh0xojb7q.css';
import '../../css/h/hgt4vzbwi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="oh0xojb7q"/><path class="hgt4vzbwi"/></g>`,
		"fallback": "icon-park-outline:html-five",
	});
}

export default Component;
