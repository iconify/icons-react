import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbu-gbckp.css';
import '../../css/t/t9c8c1b5i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbu-gbckp"/><path class="t9c8c1b5i"/>`,
		"fallback": "energy-icons:folder-open-20",
	});
}

export default Component;
