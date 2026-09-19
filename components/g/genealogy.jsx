import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvir7eh3z.css';
import '../../css/c/c4bzylu5l.css';
import '../../css/m/m3lczlbgo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvir7eh3z"/><path class="c4bzylu5l"/><path class="m3lczlbgo"/>`,
		"fallback": "flat-color-icons:genealogy",
	});
}

export default Component;
