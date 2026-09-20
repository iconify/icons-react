import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0djsxb9c.css';
import '../../css/m/munkfxquk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0djsxb9c"/><path class="munkfxquk"/>`,
		"fallback": "material-icon-theme:folder-public-open",
	});
}

export default Component;
