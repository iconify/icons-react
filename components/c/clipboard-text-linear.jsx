import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tf5rnkipa.css';
import '../../css/x/x_757hbgu.css';
import '../../css/u/ujkefybfc.css';
import '../../css/m/my5268blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tf5rnkipa"/><path class="x_757hbgu"/><path class="ujkefybfc"/><path class="my5268blj"/></g>`,
		"fallback": "solar:clipboard-text-linear",
	});
}

export default Component;
