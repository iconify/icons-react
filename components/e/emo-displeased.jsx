import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnudrgbak.css';

const viewBox = {"width":817,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnudrgbak"/>`,
		"fallback": "fontelico:emo-displeased",
	});
}

export default Component;
