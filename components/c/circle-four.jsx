import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g54fotb1f.css';
import '../../css/o/obtq3bw8r.css';
import '../../css/t/th81deifi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="g54fotb1f"><path clip-rule="evenodd" class="obtq3bw8r"/><path class="th81deifi"/></g>`,
		"fallback": "icon-park-solid:circle-four",
	});
}

export default Component;
