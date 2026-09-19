import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgx22db5h.css';

const viewBox = {"width":1025,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgx22db5h"/>`,
		"fallback": "whh:folderalt",
	});
}

export default Component;
