import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kymtsab6s.css';
import '../../css/t/te9a_gbcm.css';
import '../../css/a/a6kqdobnb.css';
import '../../css/x/xlcyklyns.css';
import '../../css/h/hm6703bba.css';
import '../../css/x/x-6bx03fu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kymtsab6s"/><path class="te9a_gbcm"/><path class="a6kqdobnb"/><path class="xlcyklyns"/><path class="hm6703bba"/><path class="x-6bx03fu"/></g>`,
		"fallback": "lucide-lab:igloo",
	});
}

export default Component;
