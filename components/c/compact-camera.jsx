import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hiflp5bhb.css';
import '../../css/e/e-p7_jblt.css';
import '../../css/n/n8krgcbjo.css';
import '../../css/c/cwv945b2s.css';
import '../../css/w/wmlnh_yyv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hiflp5bhb"/><circle class="e-p7_jblt"/><circle class="n8krgcbjo"/><path class="cwv945b2s"/><path class="wmlnh_yyv"/>`,
		"fallback": "flat-color-icons:compact-camera",
	});
}

export default Component;
