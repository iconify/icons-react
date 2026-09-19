import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/u/uv0y_5b5f.css';
import '../../css/j/j6hzilbmb.css';
import '../../css/c/cegss9fjj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="uv0y_5b5f"/><path class="j6hzilbmb"/><path class="cegss9fjj"/></g>`,
		"fallback": "icon-park:alignment-right-bottom",
	});
}

export default Component;
