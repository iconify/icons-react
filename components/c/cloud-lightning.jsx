import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j03_tsblz.css';
import '../../css/r/rs0wrok6f.css';
import '../../css/m/m6a92mbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j03_tsblz"/><path class="rs0wrok6f"/><path class="m6a92mbat"/></g>`,
		"fallback": "andrsrxn:cloud-lightning",
	});
}

export default Component;
