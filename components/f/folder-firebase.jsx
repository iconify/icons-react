import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsuo4vbmg.css';
import '../../css/l/lhog0tb8y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsuo4vbmg"/><path class="lhog0tb8y"/>`,
		"fallback": "material-icon-theme:folder-firebase",
	});
}

export default Component;
