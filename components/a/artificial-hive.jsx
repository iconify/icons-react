import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hemi351pp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hemi351pp"/>`,
		"fallback": "game-icons:artificial-hive",
	});
}

export default Component;
