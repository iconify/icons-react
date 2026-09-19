import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g54fotb1f.css';
import '../../css/a/aqezq3b2u.css';
import '../../css/g/go_3kbx3s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="g54fotb1f"><path class="aqezq3b2u"/><path clip-rule="evenodd" class="go_3kbx3s"/></g>`,
		"fallback": "icon-park-solid:circle-three",
	});
}

export default Component;
