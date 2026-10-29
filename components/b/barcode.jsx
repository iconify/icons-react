import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1a51kbri.css';
import '../../css/x/xb8nkibtq.css';
import '../../css/a/ajx3eoq3x.css';
import '../../css/q/qeicwlb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1a51kbri wm-shadow"/><path class="wm-k xb8nkibtq"/><path class="ajx3eoq3x wm-k"/><path class="qeicwlb3y wm-k"/>`,
		"fallback": "withicons-pastel:barcode",
	});
}

export default Component;
