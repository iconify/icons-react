import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly6jl_bkj.css';
import '../../css/a/aoabsmt9b.css';
import '../../css/f/fdw87rbat.css';
import '../../css/n/n9-l1jfhy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ly6jl_bkj"><circle class="aoabsmt9b"/><rect class="fdw87rbat"/><path class="n9-l1jfhy"/></g>`,
		"fallback": "icon-park:instagram-one",
	});
}

export default Component;
