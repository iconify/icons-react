import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c45xl7zgy.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/s/sfb8rqn9v.css';
import '../../css/k/ksydp3lsw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c45xl7zgy"/><path class="hwjgqrbah"/><path class="sfb8rqn9v"/><path class="ksydp3lsw"/>`,
		"fallback": "energy-icons:bookmark-x-48-bold",
	});
}

export default Component;
