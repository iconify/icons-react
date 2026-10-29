import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/df6p8rh7a.css';
import '../../css/i/ijxzg4bdd.css';
import '../../css/m/md2eyrs9r.css';
import '../../css/b/byr4zob5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="df6p8rh7a wm-k"/><path class="ijxzg4bdd wm-a"/><path class="md2eyrs9r"/><path class="byr4zob5j"/></g>`,
		"fallback": "withicons-bauhaus:cherry",
	});
}

export default Component;
