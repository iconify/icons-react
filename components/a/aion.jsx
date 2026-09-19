import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k00c97dsj.css';
import '../../css/m/md286fbip.css';
import '../../css/e/erujx010z.css';
import '../../css/f/fksyl7mkg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="k00c97dsj"/><g class="md286fbip"><path class="erujx010z"/><path class="fksyl7mkg"/></g></g>`,
		"fallback": "cryptocurrency-color:aion",
	});
}

export default Component;
