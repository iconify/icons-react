import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/e/euce6ob-r.css';
import '../../css/p/pv2ur-63o.css';
import '../../css/z/z87ugz2ff.css';
import '../../css/i/ia9iq9byb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="euce6ob-r"/><path class="pv2ur-63o"/><path class="z87ugz2ff"/><path class="ia9iq9byb"/></g>`,
		"fallback": "icon-park:file-addition",
	});
}

export default Component;
