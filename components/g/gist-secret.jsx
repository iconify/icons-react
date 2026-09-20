import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpz_xxn6w.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpz_xxn6w"/>`,
		"fallback": "octicon:gist-secret",
	});
}

export default Component;
