import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q17hgibso.css';

const viewBox = {"width":999,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q17hgibso"/>`,
		"fallback": "fontelico:emo-wink",
	});
}

export default Component;
