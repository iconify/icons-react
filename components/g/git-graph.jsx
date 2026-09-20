import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/llyo8-6yr.css';
import '../../css/a/a27p0i-fr.css';
import '../../css/j/janpq1b_z.css';
import '../../css/h/h2-2dgnfu.css';
import '../../css/o/oyjg--ejj.css';
import '../../css/n/n4lk63bsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="llyo8-6yr"/><path class="a27p0i-fr"/><circle class="janpq1b_z"/><path class="h2-2dgnfu"/><circle class="oyjg--ejj"/><path class="n4lk63bsz"/></g>`,
		"fallback": "lucide:git-graph",
	});
}

export default Component;
