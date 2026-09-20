import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqax-6b-d.css';
import '../../css/u/uwuz_dbnq.css';
import '../../css/i/ik9gecc1k.css';
import '../../css/n/n8s8jhb7k.css';
import '../../css/g/glgsqjk8b.css';
import '../../css/i/i0emr9c-d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jqax-6b-d"><path class="uwuz_dbnq"/><path class="ik9gecc1k"/><path class="n8s8jhb7k"/><path class="glgsqjk8b"/><path class="i0emr9c-d"/></g>`,
		"fallback": "streamline-plump:cherries",
	});
}

export default Component;
