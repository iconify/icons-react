import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijh__bcqo.css';
import '../../css/j/jleau3b8h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijh__bcqo"/><path class="jleau3b8h"/>`,
		"fallback": "famicons:document-text",
	});
}

export default Component;
