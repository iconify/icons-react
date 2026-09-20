import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7n2shh1v.css';
import '../../css/t/tjpqezbih.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7n2shh1v"/><path class="tjpqezbih"/>`,
		"fallback": "material-icon-theme:folder-server",
	});
}

export default Component;
