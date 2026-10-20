import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iixmlmb6g.css';
import '../../css/i/iluxt_bwt.css';
import '../../css/d/druc0kylj.css';
import '../../css/n/nna6okght.css';

const viewBox = {"width":290,"height":85};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iixmlmb6g"/><path class="iluxt_bwt"/><path class="druc0kylj"/><path class="nna6okght"/>`,
		"fallback": "thesvg-color:ben-and-jerrys",
	});
}

export default Component;
