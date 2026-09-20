import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1sz4db_b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1sz4db_b"/>`,
		"fallback": "material-icon-theme:hosts-light",
	});
}

export default Component;
