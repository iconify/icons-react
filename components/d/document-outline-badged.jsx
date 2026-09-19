import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5t493-cv.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged v5t493-cv"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-2--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:document-outline-badged",
	});
}

export default Component;
