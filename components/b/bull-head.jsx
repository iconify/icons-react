import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bw87y6lvh.css';
import '../../css/q/qeljfxiuc.css';
import '../../css/g/g2axgwbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bw87y6lvh"/><path class="qeljfxiuc"/><path class="g2axgwbig"/></g>`,
		"fallback": "lucide-lab:bull-head",
	});
}

export default Component;
