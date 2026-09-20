import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmytx2b1a.css';
import '../../css/g/gox9jubaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmytx2b1a"/><path clip-rule="evenodd" class="gox9jubaf"/>`,
		"fallback": "stash:folder-alt-duotone",
	});
}

export default Component;
