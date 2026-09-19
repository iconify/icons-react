import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egp4naccw.css';
import '../../css/z/zbivezbsf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egp4naccw"/><path class="zbivezbsf"/>`,
		"fallback": "flat-color-icons:alphabetical-sorting-az",
	});
}

export default Component;
