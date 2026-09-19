import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw7wwe3lc.css';
import '../../css/o/ovk3-rb6p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw7wwe3lc"/><path class="ovk3-rb6p"/>`,
		"fallback": "entypo:creative-commons-remix",
	});
}

export default Component;
