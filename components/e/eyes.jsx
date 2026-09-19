import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/b/bssk72b0m.css';
import '../../css/r/r5u72ug_r.css';
import '../../css/o/o1i1dslrl.css';
import '../../css/q/q-37s9qkg.css';
import '../../css/f/fdb0c7n_b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path clip-rule="evenodd" class="bssk72b0m"/><path class="r5u72ug_r"/><path class="o1i1dslrl"/><path class="q-37s9qkg"/><path class="fdb0c7n_b"/></g>`,
		"fallback": "icon-park:eyes",
	});
}

export default Component;
