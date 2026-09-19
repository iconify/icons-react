import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/i/ii0wlebwq.css';
import '../../css/t/tq02k9b6e.css';
import '../../css/m/mujmwlp-j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ii0wlebwq"/><ellipse class="tq02k9b6e"/><path class="mujmwlp-j"/></g>`,
		"fallback": "icon-park-outline:future-build-two",
	});
}

export default Component;
