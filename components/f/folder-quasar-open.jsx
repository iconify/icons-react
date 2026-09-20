import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps-bh4bky.css';
import '../../css/j/j9noiqajd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps-bh4bky"/><path class="j9noiqajd"/>`,
		"fallback": "material-icon-theme:folder-quasar-open",
	});
}

export default Component;
