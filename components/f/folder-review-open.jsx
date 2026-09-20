import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kov7snrof.css';
import '../../css/a/a076kccfp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kov7snrof"/><path class="a076kccfp"/>`,
		"fallback": "material-icon-theme:folder-review-open",
	});
}

export default Component;
