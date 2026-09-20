import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj-tnhbad.css';
import '../../css/h/hhwq3mbng.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj-tnhbad"/><path class="hhwq3mbng"/>`,
		"fallback": "material-icon-theme:folder-mock-open",
	});
}

export default Component;
