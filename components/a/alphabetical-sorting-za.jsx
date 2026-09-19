import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw_7llbhm.css';
import '../../css/e/egp4naccw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw_7llbhm"/><path class="egp4naccw"/>`,
		"fallback": "flat-color-icons:alphabetical-sorting-za",
	});
}

export default Component;
