import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg1bwt3th.css';
import '../../css/o/otkou3uyf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kg1bwt3th"/><path class="otkou3uyf"/>`,
		"fallback": "material-icon-theme:folder-kubernetes",
	});
}

export default Component;
