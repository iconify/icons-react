import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/ajyf3nzah.css';
import '../../css/s/sqkeg0bva.css';
import '../../css/s/s2byty4_q.css';
import '../../css/f/f4un4zb0e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ajyf3nzah"/><path class="sqkeg0bva"/><rect class="s2byty4_q"/><path class="f4un4zb0e"/></g>`,
		"fallback": "icon-park-solid:hold-interface",
	});
}

export default Component;
