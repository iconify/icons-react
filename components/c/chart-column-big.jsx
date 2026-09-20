import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vajax-0mf.css';
import '../../css/f/f0mlzybpd.css';
import '../../css/r/rxzaf1bym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vajax-0mf"/><rect class="f0mlzybpd"/><rect class="rxzaf1bym"/></g>`,
		"fallback": "lucide:chart-column-big",
	});
}

export default Component;
