import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/l/l88i7dblt.css';
import '../../css/g/gfrclwb4b.css';
import '../../css/y/yi6bw9bpg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="l88i7dblt"/><path class="gfrclwb4b"/><path class="yi6bw9bpg"/></g>`,
		"fallback": "icon-park:bottom-bar",
	});
}

export default Component;
