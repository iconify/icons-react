import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq27ugb2z.css';
import '../../css/l/lhog0tb8y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq27ugb2z"/><path class="lhog0tb8y"/>`,
		"fallback": "material-icon-theme:folder-firebase-open",
	});
}

export default Component;
