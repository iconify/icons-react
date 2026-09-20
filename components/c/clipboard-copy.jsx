import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s5lpn11ei.css';
import '../../css/h/hsygy-bew.css';
import '../../css/b/bncicdbam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="s5lpn11ei"/><path class="hsygy-bew"/><path class="bncicdbam"/></g>`,
		"fallback": "lucide:clipboard-copy",
	});
}

export default Component;
