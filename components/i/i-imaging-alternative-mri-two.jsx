import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxe00ibvs.css';
import '../../css/k/ka7rv-bbk.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxe00ibvs"/><path class="ka7rv-bbk"/>`,
		"fallback": "medical-icon:i-imaging-alternative-mri-two",
	});
}

export default Component;
