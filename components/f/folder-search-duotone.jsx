import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/m/mq2ccos5s.css';
import '../../css/w/wh25rpwfz.css';
import '../../css/u/us0mlcc8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="mq2ccos5s"/><path clip-rule="evenodd" class="wh25rpwfz"/></g><path clip-rule="evenodd" class="us0mlcc8v"/>`,
		"fallback": "stash:folder-search-duotone",
	});
}

export default Component;
