import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okbu3-k6y.css';
import '../../css/p/pzfwzzb9e.css';
import '../../css/b/bhjkzgb5r.css';
import '../../css/f/fm6x645ov.css';
import '../../css/r/rtl-k8b6b.css';
import '../../css/o/om-j69jmg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okbu3-k6y"/><path class="pzfwzzb9e"/><path class="bhjkzgb5r"/><path class="fm6x645ov"/><path class="rtl-k8b6b"/><path class="om-j69jmg"/>`,
		"fallback": "energy-icons:agrivoltaics-20",
	});
}

export default Component;
