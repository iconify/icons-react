import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk5s5sbxi.css';
import '../../css/e/ecj_qnblt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk5s5sbxi"/><path class="ecj_qnblt"/>`,
		"fallback": "material-icon-theme:copilot-light",
	});
}

export default Component;
