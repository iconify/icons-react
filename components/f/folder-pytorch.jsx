import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvwqut9aq.css';
import '../../css/u/ul45rw7xq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvwqut9aq"/><path class="ul45rw7xq"/>`,
		"fallback": "material-icon-theme:folder-pytorch",
	});
}

export default Component;
