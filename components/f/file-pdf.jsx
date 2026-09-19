import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/j/jcxlm2b2l.css';
import '../../css/m/mlzal26cj.css';
import '../../css/v/vr7vsou9n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="jcxlm2b2l"/><path clip-rule="evenodd" class="mlzal26cj"/><path class="vr7vsou9n"/></g>`,
		"fallback": "icon-park:file-pdf",
	});
}

export default Component;
