import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbe2gqb6b.css';
import '../../css/l/l1-9pdbrq.css';
import '../../css/k/k8wf0kv_j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbe2gqb6b"/><path class="l1-9pdbrq"/><path class="k8wf0kv_j"/>`,
		"fallback": "energy-icons:hydrogen-compressor-48",
	});
}

export default Component;
