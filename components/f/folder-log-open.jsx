import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9_amsz7a.css';
import '../../css/t/t7parlbsg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9_amsz7a"/><path class="t7parlbsg"/>`,
		"fallback": "material-icon-theme:folder-log-open",
	});
}

export default Component;
