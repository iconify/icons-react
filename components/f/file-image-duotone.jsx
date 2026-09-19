import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lhj0lixiu.css';
import '../../css/t/ti90qacav.css';
import '../../css/k/kgnih4bpb.css';
import '../../css/q/q6fokkn0a.css';
import '../../css/z/z7bc25blt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lhj0lixiu"/><path class="ti90qacav"/><path class="kgnih4bpb"/><path class="q6fokkn0a"/><path class="z7bc25blt"/></g>`,
		"fallback": "iconamoon:file-image-duotone",
	});
}

export default Component;
