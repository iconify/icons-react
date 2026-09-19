import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/se3d1wbjp.css';
import '../../css/z/z4qe3m8st.css';
import '../../css/t/t6etbsbmf.css';
import '../../css/g/gjg8mvbrt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="se3d1wbjp"/><path class="z4qe3m8st"/><path class="t6etbsbmf"/><path class="gjg8mvbrt"/></g>`,
		"fallback": "fluent-emoji-flat:doughnut",
	});
}

export default Component;
