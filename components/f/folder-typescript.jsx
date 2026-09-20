import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhg495fle.css';
import '../../css/g/gsynuhbwc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhg495fle"/><path class="gsynuhbwc"/>`,
		"fallback": "material-icon-theme:folder-typescript",
	});
}

export default Component;
