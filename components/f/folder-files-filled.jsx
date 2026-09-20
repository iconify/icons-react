import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz00br_eb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pz00br_eb"/>`,
		"fallback": "lsicon:folder-files-filled",
	});
}

export default Component;
