import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkc9nmf3a.css';
import '../../css/z/zosfd94fi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkc9nmf3a"/><path class="zosfd94fi"/>`,
		"fallback": "energy-icons:corner-right-up-20",
	});
}

export default Component;
