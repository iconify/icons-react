import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu79aub5k.css';
import '../../css/y/y801r3qvz.css';
import '../../css/m/mbfprhq2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xu79aub5k"/><path class="y801r3qvz"/><path clip-rule="evenodd" class="mbfprhq2v"/>`,
		"fallback": "solar:folder-tree-outline",
	});
}

export default Component;
