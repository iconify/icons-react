import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sloxky3hq.css';
import '../../css/t/ty3wfdbwh.css';
import '../../css/e/ecqyph_wl.css';
import '../../css/w/w7gct3bsf.css';

const viewBox = {"width":365.56,"height":245.56,"left":-2.78,"top":54.22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sloxky3hq"><path class="ty3wfdbwh"/><path class="ecqyph_wl"/><path class="w7gct3bsf"/></g>`,
		"fallback": "thesvg-color:cloudevents-light",
	});
}

export default Component;
