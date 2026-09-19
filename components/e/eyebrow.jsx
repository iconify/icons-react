import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/d/d0_0fyo4s.css';
import '../../css/q/qqo604awj.css';
import '../../css/t/tr8estbvs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="d0_0fyo4s"/><path class="qqo604awj"/><path class="tr8estbvs"/></g>`,
		"fallback": "icon-park:eyebrow",
	});
}

export default Component;
