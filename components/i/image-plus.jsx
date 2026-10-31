import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fqdt6h6bs.css';
import '../../css/s/s4qsgdqdy.css';
import '../../css/n/n9-hux23b.css';
import '../../css/s/snolryeou.css';
import '../../css/a/ain1tnbxt.css';
import '../../css/s/sy7kpcbuo.css';
import '../../css/m/miknsv_yb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="fqdt6h6bs"/><path class="s4qsgdqdy"/><path class="n9-hux23b wm-s"/><path class="snolryeou wm-shine"/><path class="ain1tnbxt wm-k"/><path class="sy7kpcbuo wm-a"/><path class="miknsv_yb wm-s"/></g>`,
		"fallback": "withicons-kawaii:image-plus",
	});
}

export default Component;
