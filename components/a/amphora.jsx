import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kdu4ius8f.css';
import '../../css/f/f2gwe7byg.css';
import '../../css/z/zpr52sbwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kdu4ius8f"/><path class="f2gwe7byg"/><path class="zpr52sbwp"/></g>`,
		"fallback": "lucide:amphora",
	});
}

export default Component;
