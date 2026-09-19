import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/momxgpb6o.css';
import '../../css/m/md286fbip.css';
import '../../css/i/i8nlo91al.css';
import '../../css/x/xlqm4ibmx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="momxgpb6o"/><g class="md286fbip"><path class="i8nlo91al"/><path class="xlqm4ibmx"/></g></g>`,
		"fallback": "cryptocurrency-color:band",
	});
}

export default Component;
