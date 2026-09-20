import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/z/zull_zb7v.css';
import '../../css/d/daj9nabrg.css';
import '../../css/k/krktqu-fm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="zull_zb7v"/><path class="daj9nabrg"/><path class="krktqu-fm"/></g>`,
		"fallback": "streamline-plump:document-certificate",
	});
}

export default Component;
