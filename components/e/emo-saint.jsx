import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et_rd7bsi.css';

const viewBox = {"width":999,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et_rd7bsi"/>`,
		"fallback": "fontelico:emo-saint",
	});
}

export default Component;
