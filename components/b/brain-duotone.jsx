import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kmq_b5bkr.css';
import '../../css/j/jnbmkr38d.css';
import '../../css/u/uk44mbn3q.css';
import '../../css/o/okj8i9buz.css';
import '../../css/o/oivs5vbqd.css';
import '../../css/r/rt37mq97e.css';
import '../../css/t/tgi0qps2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kmq_b5bkr"/><path class="jnbmkr38d"/><path class="uk44mbn3q"/><path class="okj8i9buz"/><path class="oivs5vbqd"/><path class="rt37mq97e"/><path class="tgi0qps2w"/></g>`,
		"fallback": "lucide-extended:brain-duotone",
	});
}

export default Component;
