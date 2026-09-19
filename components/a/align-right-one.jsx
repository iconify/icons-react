import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/g/g5oougblb.css';
import '../../css/z/zsylbebuv.css';
import '../../css/j/j0sc3zbla.css';
import '../../css/t/ttnpst71b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="g5oougblb"/><path class="zsylbebuv"/><path class="j0sc3zbla"/><path class="ttnpst71b"/></g>`,
		"fallback": "icon-park:align-right-one",
	});
}

export default Component;
