import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg_cwepzi.css';
import '../../css/t/tvqx1abby.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg_cwepzi"/><path class="tvqx1abby"/>`,
		"fallback": "material-icon-theme:folder-stack-open",
	});
}

export default Component;
