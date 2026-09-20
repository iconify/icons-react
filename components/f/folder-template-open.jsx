import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj-tnhbad.css';
import '../../css/t/t_5urzb9y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj-tnhbad"/><path class="t_5urzb9y"/>`,
		"fallback": "material-icon-theme:folder-template-open",
	});
}

export default Component;
