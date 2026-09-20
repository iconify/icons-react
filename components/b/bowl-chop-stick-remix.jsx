import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk7cyca1a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jk7cyca1a"/>`,
		"fallback": "streamline-plump:bowl-chop-stick-remix",
	});
}

export default Component;
