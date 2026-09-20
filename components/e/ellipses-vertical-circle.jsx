import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufvn0ab1g.css';
import '../../css/g/gbeeqjbbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufvn0ab1g"/><path class="gbeeqjbbp"/>`,
		"fallback": "pixel:ellipses-vertical-circle",
	});
}

export default Component;
