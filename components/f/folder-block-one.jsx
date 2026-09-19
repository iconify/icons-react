import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/v/vp420rb5o.css';
import '../../css/k/kuigothyl.css';
import '../../css/b/bbiysdm9e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="vp420rb5o"/><circle class="kuigothyl"/><path class="bbiysdm9e"/></g>`,
		"fallback": "icon-park:folder-block-one",
	});
}

export default Component;
