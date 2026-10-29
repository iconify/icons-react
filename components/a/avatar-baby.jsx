import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cnpruebzr.css';
import '../../css/k/k3j2t8vzd.css';
import '../../css/b/bg2k58ixl.css';
import '../../css/q/qk9xa2v5m.css';
import '../../css/o/o_yfqzfoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cnpruebzr"/><path class="k3j2t8vzd"/><path class="bg2k58ixl"/><path class="qk9xa2v5m"/><path class="o_yfqzfoz"/></g>`,
		"fallback": "withicons-bauhaus:avatar-baby",
	});
}

export default Component;
