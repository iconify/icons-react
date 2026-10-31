import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/d/d9nebssfw.css';
import '../../css/k/kn21p-bsc.css';
import '../../css/m/m8x_zhotu.css';
import '../../css/k/ka18u3bai.css';
import '../../css/i/i-oq5ub8f.css';
import '../../css/s/sfg4-ob9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="d9nebssfw"/><path class="kn21p-bsc"/><path class="m8x_zhotu wm-shine"/><path class="ka18u3bai wm-k"/><path class="i-oq5ub8f wm-a"/><path class="sfg4-ob9o wm-deco"/></g>`,
		"fallback": "withicons-kawaii:avatar-bear",
	});
}

export default Component;
