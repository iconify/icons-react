import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/j/jcxlm2b2l.css';
import '../../css/a/ar-7x19wi.css';
import '../../css/z/zjh4xye2a.css';
import '../../css/s/smxdsl_uu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="jcxlm2b2l"/><path class="ar-7x19wi"/><path class="zjh4xye2a"/><path class="smxdsl_uu"/></g>`,
		"fallback": "icon-park:file-jpg",
	});
}

export default Component;
