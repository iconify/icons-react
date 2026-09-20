import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx2l3o9hm.css';
import '../../css/c/catkmrzgd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx2l3o9hm"/><path class="catkmrzgd"/>`,
		"fallback": "material-icon-theme:folder-unity-open",
	});
}

export default Component;
