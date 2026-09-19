import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/cslsnsbdo.css';
import '../../css/d/daj4drb4a.css';
import '../../css/j/j9hg1or3h.css';
import '../../css/h/hh_ficcty.css';
import '../../css/t/tt3n4ibfb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="cslsnsbdo"/><path class="daj4drb4a"/><path class="j9hg1or3h"/><path class="hh_ficcty"/><path class="tt3n4ibfb"/></g>`,
		"fallback": "icon-park-outline:church-one",
	});
}

export default Component;
