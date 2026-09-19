import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r5ig5jf_y.css';
import '../../css/c/cqjxcq3hd.css';
import '../../css/z/z55wy7lyw.css';
import '../../css/q/ql0647bpf.css';
import '../../css/t/tf_a85bcr.css';
import '../../css/c/cvwqdz8ts.css';
import '../../css/s/s5fd5bb-l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r5ig5jf_y"/><path class="cqjxcq3hd"/><rect class="z55wy7lyw"/><path class="ql0647bpf"/><path class="tf_a85bcr"/><rect class="cvwqdz8ts"/><rect class="s5fd5bb-l"/></g>`,
		"fallback": "icon-park:game-three",
	});
}

export default Component;
