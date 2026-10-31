import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m6-k53ult.css';
import '../../css/p/pyo5dubfh.css';
import '../../css/v/vs3_2yq5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="m6-k53ult"/><path class="pyo5dubfh wm-k"/><path class="vs3_2yq5q wm-a"/></g>`,
		"fallback": "withicons-kawaii:flag-checkered",
	});
}

export default Component;
