import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmeeo747i.css';
import '../../css/b/bzqhk4t2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmeeo747i"/><path class="bzqhk4t2f"/>`,
		"fallback": "mage:box-3d-cross-fill",
	});
}

export default Component;
