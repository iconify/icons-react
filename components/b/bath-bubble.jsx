import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/puhw2wz1p.css';
import '../../css/j/jf4vsjl9n.css';
import '../../css/x/xd5om9bvr.css';
import '../../css/l/l8vwp4bnt.css';
import '../../css/e/e6rcat6vq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="puhw2wz1p"/><circle class="jf4vsjl9n"/><circle class="xd5om9bvr"/><path class="l8vwp4bnt"/><path class="e6rcat6vq"/></g>`,
		"fallback": "lucide-lab:bath-bubble",
	});
}

export default Component;
