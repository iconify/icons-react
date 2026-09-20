import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dypv3-mdc.css';
import '../../css/j/jrywsebcn.css';
import '../../css/e/eoh-kmiad.css';
import '../../css/u/un29wccgo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dypv3-mdc"/><g class="jrywsebcn"><path class="eoh-kmiad"/><circle class="un29wccgo"/></g>`,
		"fallback": "material-icon-theme:folder-circleci",
	});
}

export default Component;
