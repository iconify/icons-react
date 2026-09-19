import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/r/rniplklmo.css';
import '../../css/a/a9vmhrz8t.css';
import '../../css/k/kntuwjb7f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><circle class="rniplklmo"/><path class="a9vmhrz8t"/><path class="kntuwjb7f"/></g>`,
		"fallback": "icon-park:egg",
	});
}

export default Component;
