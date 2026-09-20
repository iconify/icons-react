import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wqf_9i70w.css';
import '../../css/c/cvd8a-02h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="wqf_9i70w"/><path class="cvd8a-02h"/></g>`,
		"fallback": "meteor-icons:gamepad",
	});
}

export default Component;
