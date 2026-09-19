import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-xk_ruej.css';
import '../../css/j/jv463gbdf.css';
import '../../css/b/b49q-0sop.css';
import '../../css/s/s3ioz5cym.css';
import '../../css/n/nndxyclzt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-xk_ruej"/><path class="jv463gbdf"/><path class="b49q-0sop"/><path class="s3ioz5cym"/><path class="nndxyclzt"/>`,
		"fallback": "fxemoji:angry",
	});
}

export default Component;
