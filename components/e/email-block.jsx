import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/g/gzks8bcyr.css';
import '../../css/w/wso75kn4e.css';
import '../../css/b/bbiysdm9e.css';
import '../../css/s/sarx32axf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="gzks8bcyr"/><circle class="wso75kn4e"/><path class="bbiysdm9e"/><path class="sarx32axf"/></g>`,
		"fallback": "icon-park:email-block",
	});
}

export default Component;
