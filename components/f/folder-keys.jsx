import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l47nr7bbh.css';
import '../../css/i/iywcnqb5a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l47nr7bbh"/><path class="iywcnqb5a"/>`,
		"fallback": "material-icon-theme:folder-keys",
	});
}

export default Component;
