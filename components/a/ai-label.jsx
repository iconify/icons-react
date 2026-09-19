import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy8f-purm.css';
import '../../css/v/v__h0hbug.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy8f-purm"/><path class="v__h0hbug"/>`,
		"fallback": "carbon:ai-label",
	});
}

export default Component;
