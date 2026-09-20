import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdm2j-v_h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdm2j-v_h"/>`,
		"fallback": "material-icon-theme:controller",
	});
}

export default Component;
