import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k30_82bht.css';
import '../../css/w/wqk9itcqr.css';
import '../../css/q/qdzstlt9t.css';
import '../../css/a/ain1tnbxt.css';
import '../../css/s/sy7kpcbuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k30_82bht"/><path class="wm-s wqk9itcqr"/><path class="qdzstlt9t wm-s"/><path class="ain1tnbxt"/><path class="sy7kpcbuo wm-a"/></g>`,
		"fallback": "withicons:image-sparkles-duo",
	});
}

export default Component;
