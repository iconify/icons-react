import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtmc67bsf.css';
import '../../css/z/zaro8kx4p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtmc67bsf"/><path class="zaro8kx4p"/>`,
		"fallback": "material-icon-theme:folder-television-open",
	});
}

export default Component;
