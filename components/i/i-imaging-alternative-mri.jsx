import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk1mbvbfk.css';
import '../../css/b/b4-fwcc_a.css';

const viewBox = {"width":63,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk1mbvbfk"/><path class="b4-fwcc_a"/>`,
		"fallback": "medical-icon:i-imaging-alternative-mri",
	});
}

export default Component;
