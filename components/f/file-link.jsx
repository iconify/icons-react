import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sci_dqbke.css';
import '../../css/n/nxkhmqbsa.css';
import '../../css/n/npjh9q8by.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sci_dqbke"/><path class="nxkhmqbsa"/><path class="npjh9q8by"/></g>`,
		"fallback": "andrsrxn:file-link",
	});
}

export default Component;
