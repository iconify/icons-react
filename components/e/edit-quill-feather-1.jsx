import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q-108t_vh.css';
import '../../css/o/o7sbf8smt.css';
import '../../css/j/jl4w00c4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q-108t_vh"/><path class="o7sbf8smt"/><path class="jl4w00c4y"/></g>`,
		"fallback": "streamline-freehand:edit-quill-feather-1",
	});
}

export default Component;
