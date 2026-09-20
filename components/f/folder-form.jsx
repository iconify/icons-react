import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-ad0g2qb.css';
import '../../css/y/ykiyg6-he.css';
import '../../css/q/qgl6-9-os.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-ad0g2qb"/><path class="ykiyg6-he"/><path class="qgl6-9-os"/>`,
		"fallback": "material-icon-theme:folder-form",
	});
}

export default Component;
