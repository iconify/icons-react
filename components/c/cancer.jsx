import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jpu0cubwf.css';
import '../../css/p/pgcwh7bgt.css';
import '../../css/w/wjpvdcbgb.css';
import '../../css/e/errurjr8u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="jpu0cubwf"/><path class="pgcwh7bgt"/><circle transform="rotate(-180 11 31)" class="wjpvdcbgb"/><path class="errurjr8u"/></g>`,
		"fallback": "icon-park-solid:cancer",
	});
}

export default Component;
