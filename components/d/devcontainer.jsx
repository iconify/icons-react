import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pen3qlbpt.css';
import '../../css/q/qmyv_61bs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pen3qlbpt"/><path class="qmyv_61bs"/>`,
		"fallback": "catppuccin:devcontainer",
	});
}

export default Component;
