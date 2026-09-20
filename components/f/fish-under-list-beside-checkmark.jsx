import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azef4rb2e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azef4rb2e"/>`,
		"fallback": "pinhead:fish-under-list-beside-checkmark",
	});
}

export default Component;
