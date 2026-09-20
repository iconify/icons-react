import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e1il69f6r.css';
import '../../css/r/ruq_o-b0w.css';
import '../../css/y/ym_-idjnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="e1il69f6r"/><path class="ruq_o-b0w"/><path class="ym_-idjnp"/></g>`,
		"fallback": "streamline-freehand-color:human-resources-rating-man",
	});
}

export default Component;
