import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_zincina.css';
import '../../css/h/h1ltq8ifw.css';
import '../../css/g/g9gmjl-2d.css';
import '../../css/a/aja_aog3q.css';
import '../../css/s/spy7zkbxn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="q_zincina"/><path class="h1ltq8ifw"/><circle class="g9gmjl-2d"/><circle class="aja_aog3q"/><path class="spy7zkbxn"/>`,
		"fallback": "ion:git-pull-request-outline",
	});
}

export default Component;
