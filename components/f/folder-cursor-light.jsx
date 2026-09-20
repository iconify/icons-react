import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz4v91hwj.css';
import '../../css/l/lhr648d7s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz4v91hwj"/><path class="lhr648d7s"/>`,
		"fallback": "material-icon-theme:folder-cursor-light",
	});
}

export default Component;
