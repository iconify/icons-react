import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/daf256bfu.css';
import '../../css/n/n1n9sqbva.css';
import '../../css/x/xm4ox53de.css';
import '../../css/q/qjej3_d_o.css';
import '../../css/i/iid3i1bvb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="daf256bfu"/><path class="n1n9sqbva"/><path class="xm4ox53de"/><path class="qjej3_d_o"/><path class="iid3i1bvb"/></g>`,
		"fallback": "streamline-plump-color:floppy-disk",
	});
}

export default Component;
