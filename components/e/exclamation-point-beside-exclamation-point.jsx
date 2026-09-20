import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai-hwv_fk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai-hwv_fk"/>`,
		"fallback": "pinhead:exclamation-point-beside-exclamation-point",
	});
}

export default Component;
