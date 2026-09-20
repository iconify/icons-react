import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2zgibcpm.css';
import '../../css/z/zsaa8-ecz.css';
import '../../css/k/ku7tdocas.css';
import '../../css/l/lm00rvpau.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2zgibcpm"/><circle class="zsaa8-ecz"/><path class="ku7tdocas"/><path class="lm00rvpau"/>`,
		"fallback": "material-icon-theme:apollo",
	});
}

export default Component;
