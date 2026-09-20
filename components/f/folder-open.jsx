import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br3drl69p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br3drl69p"/>`,
		"fallback": "mdi:folder-open",
	});
}

export default Component;
