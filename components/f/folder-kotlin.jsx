import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-ad0g2qb.css';
import '../../css/o/ogtj31bng.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-ad0g2qb"/><path class="ogtj31bng"/>`,
		"fallback": "material-icon-theme:folder-kotlin",
	});
}

export default Component;
