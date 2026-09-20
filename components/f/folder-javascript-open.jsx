import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8qgey2bj.css';
import '../../css/g/gurxminzy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8qgey2bj"/><path class="gurxminzy"/>`,
		"fallback": "material-icon-theme:folder-javascript-open",
	});
}

export default Component;
