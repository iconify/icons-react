import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj5g77b1a.css';
import '../../css/w/wx34jwbfm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj5g77b1a"/><path class="wx34jwbfm"/>`,
		"fallback": "material-icon-theme:folder-helper",
	});
}

export default Component;
