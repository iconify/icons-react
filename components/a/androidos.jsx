import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo_2v9b7x.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bo_2v9b7x"/>`,
		"fallback": "wpf:androidos",
	});
}

export default Component;
