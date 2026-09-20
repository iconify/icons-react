import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/h/hgs3xdj9a.css';
import '../../css/u/u2r651b9t.css';
import '../../css/s/sr9f-eb9q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="hgs3xdj9a"/><path class="u2r651b9t"/><path class="sr9f-eb9q"/></g>`,
		"fallback": "streamline-plump:cao-dai",
	});
}

export default Component;
