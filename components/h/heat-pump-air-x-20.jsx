import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0roxubvm.css';
import '../../css/q/qnea9bsmy.css';
import '../../css/j/j6cyu6bqi.css';
import '../../css/p/p-qkgzbzb.css';
import '../../css/k/k_yv9qbfm.css';
import '../../css/l/lzmnrrp8b.css';
import '../../css/j/j2_uc6brw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0roxubvm"/><path class="qnea9bsmy"/><path class="j6cyu6bqi"/><path class="p-qkgzbzb"/><path class="k_yv9qbfm"/><path class="lzmnrrp8b"/><path class="j2_uc6brw"/>`,
		"fallback": "energy-icons:heat-pump-air-x-20",
	});
}

export default Component;
