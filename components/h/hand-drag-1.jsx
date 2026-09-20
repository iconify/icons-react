import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b80_6fw2e.css';
import '../../css/e/e1b0j_zzo.css';
import '../../css/u/u93vqe5st.css';
import '../../css/y/ymoffv9vo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b80_6fw2e"/><path class="e1b0j_zzo"/><path class="u93vqe5st"/><path class="ymoffv9vo"/></g>`,
		"fallback": "streamline-ultimate-color:hand-drag-1",
	});
}

export default Component;
