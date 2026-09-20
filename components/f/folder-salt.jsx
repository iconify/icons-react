import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2t00mbrv.css';
import '../../css/o/oensybc-j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2t00mbrv"/><path class="oensybc-j"/>`,
		"fallback": "material-icon-theme:folder-salt",
	});
}

export default Component;
