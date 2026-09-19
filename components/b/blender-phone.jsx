import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my6ng4bew.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my6ng4bew"/>`,
		"fallback": "fa7-solid:blender-phone",
	});
}

export default Component;
