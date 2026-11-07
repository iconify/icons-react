import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it-7es4xk.css';
import '../../css/h/hy90i3qby.css';
import '../../css/h/h4a44aced.css';
import '../../css/g/grzwsmb2z.css';
import '../../css/a/alh1q2bob.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/k-49hib6s.css';
import '../../css/i/irmghwbga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it-7es4xk"/><path class="hy90i3qby"/><path class="h4a44aced"/><path class="grzwsmb2z"/><path class="alh1q2bob"/><g class="xtpeb-edw"><path class="k-49hib6s"/><path class="irmghwbga"/></g>`,
		"fallback": "solar:barcode-bold-duotone",
	});
}

export default Component;
