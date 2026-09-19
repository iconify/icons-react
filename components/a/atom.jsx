import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7vtozbyk.css';
import '../../css/m/md286fbip.css';
import '../../css/a/ak90akbsu.css';
import '../../css/x/xmjd1ub6l.css';
import '../../css/e/e4pn_abjo.css';
import '../../css/q/qqvwu9bko.css';
import '../../css/w/w04xu8b4q.css';
import '../../css/r/rhea83bqc.css';
import '../../css/c/cjd7a0bdy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="m7vtozbyk"/><g transform="translate(6 5)" class="md286fbip"><path class="ak90akbsu"/><path class="xmjd1ub6l"/><path class="e4pn_abjo"/><circle class="qqvwu9bko"/><circle class="w04xu8b4q"/><circle class="rhea83bqc"/><circle class="cjd7a0bdy"/></g></g>`,
		"fallback": "cryptocurrency-color:atom",
	});
}

export default Component;
