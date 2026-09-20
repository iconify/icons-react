import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kov7snrof.css';
import '../../css/l/l5zpj0bye.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kov7snrof"/><path class="l5zpj0bye"/>`,
		"fallback": "material-icon-theme:folder-changesets-open",
	});
}

export default Component;
