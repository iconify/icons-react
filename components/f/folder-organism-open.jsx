import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzicu7o9n.css';
import '../../css/k/knky5hmzz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzicu7o9n"/><path class="knky5hmzz"/>`,
		"fallback": "material-icon-theme:folder-organism-open",
	});
}

export default Component;
