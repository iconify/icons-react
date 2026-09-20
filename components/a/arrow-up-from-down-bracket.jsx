import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h37jq-dsh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h37jq-dsh"/>`,
		"fallback": "pinhead:arrow-up-from-down-bracket",
	});
}

export default Component;
