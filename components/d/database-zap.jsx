import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/e/ei3f7vokp.css';
import '../../css/t/tgtuxs_ze.css';
import '../../css/r/rn913dbor.css';
import '../../css/t/tqjnvpken.css';
import '../../css/x/xfthtjbma.css';
import '../../css/b/b41prxj8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ei3f7vokp"/><path class="tgtuxs_ze wm-s"/><path class="rn913dbor wm-shine"/><path class="tqjnvpken wm-k"/><path class="wm-a xfthtjbma"/><path class="b41prxj8s wm-s"/></g>`,
		"fallback": "withicons-kawaii:database-zap",
	});
}

export default Component;
