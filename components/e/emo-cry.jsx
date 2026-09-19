import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo2ttybuy.css';

const viewBox = {"width":851,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo2ttybuy"/>`,
		"fallback": "fontelico:emo-cry",
	});
}

export default Component;
