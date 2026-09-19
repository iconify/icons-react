import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b54bhv41g.css';
import '../../css/y/y17bibbnh.css';
import '../../css/d/d__w8cbvs.css';
import '../../css/a/ajvgykbqs.css';
import '../../css/s/switkv-0r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b54bhv41g clr-i-outline--alerted clr-i-outline-path-1--alerted"/><path class="clr-i-outline--alerted clr-i-outline-path-2--alerted y17bibbnh"/><path class="clr-i-outline--alerted clr-i-outline-path-3--alerted d__w8cbvs"/><path class="ajvgykbqs clr-i-outline--alerted clr-i-outline-path-4--alerted"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-5--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:event-outline-alerted",
	});
}

export default Component;
