import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7n2shh1v.css';
import '../../css/z/zaro8kx4p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7n2shh1v"/><path class="zaro8kx4p"/>`,
		"fallback": "material-icon-theme:folder-television",
	});
}

export default Component;
