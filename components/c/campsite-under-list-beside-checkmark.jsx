import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-id9i7nx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-id9i7nx"/>`,
		"fallback": "pinhead:campsite-under-list-beside-checkmark",
	});
}

export default Component;
