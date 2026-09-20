import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukvws-bxw.css';
import '../../css/t/tv26_bcqf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukvws-bxw"/><path class="tv26_bcqf"/>`,
		"fallback": "material-icon-theme:folder-seeders",
	});
}

export default Component;
