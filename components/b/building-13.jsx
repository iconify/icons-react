import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qveazabrj.css';
import '../../css/v/v65d5prbw.css';
import '../../css/s/snb19mb6h.css';
import '../../css/f/fg03-nb6a.css';
import '../../css/d/d5noox9dg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qveazabrj"/><path class="v65d5prbw"/><path class="snb19mb6h"/><path class="fg03-nb6a"/><path class="d5noox9dg"/></g>`,
		"fallback": "streamline-cyber-color:building-13",
	});
}

export default Component;
