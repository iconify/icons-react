import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/y/yc-rindwg.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kw_c2t8fb.css';
import '../../css/o/oqc5_nb5e.css';
import '../../css/l/li13oht6i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGhifbLbfL" class="n1mjunbsu"><path class="yc-rindwg"/></mask><g class="ft5dv1b6b"><path class="kw_c2t8fb"/><path mask="url(#SVGhifbLbfL)" class="oqc5_nb5e"/><path class="li13oht6i"/></g>`,
		"fallback": "quill:cloudia",
	});
}

export default Component;
