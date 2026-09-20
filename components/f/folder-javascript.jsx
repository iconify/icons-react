import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljf7d2blh.css';
import '../../css/g/gurxminzy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljf7d2blh"/><path class="gurxminzy"/>`,
		"fallback": "material-icon-theme:folder-javascript",
	});
}

export default Component;
