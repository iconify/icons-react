import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg171ebhl.css';
import '../../css/z/z6ju0jldq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg171ebhl"/><path class="z6ju0jldq"/>`,
		"fallback": "material-icon-theme:folder-postman",
	});
}

export default Component;
