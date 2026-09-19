import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/uw5095hhm.css';
import '../../css/h/h549j8bsx.css';
import '../../css/a/aes-akrzs.css';
import '../../css/r/rhrw8lbls.css';
import '../../css/m/mz0julbdy.css';
import '../../css/k/koimzu-se.css';
import '../../css/m/mpsoji8rp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="uw5095hhm"/><path class="h549j8bsx"/><path class="aes-akrzs"/><path class="rhrw8lbls"/><path class="mz0julbdy"/><path class="koimzu-se"/><path class="mpsoji8rp"/></g>`,
		"fallback": "icon-park:analysis",
	});
}

export default Component;
