import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuejpjjmz.css';
import '../../css/r/r6fga5szw.css';
import '../../css/u/ualmvtb9v.css';
import '../../css/l/lsg5j7ibl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="vuejpjjmz"/><circle class="r6fga5szw"/><circle class="ualmvtb9v"/><path class="lsg5j7ibl"/>`,
		"fallback": "famicons:ellipsis-vertical-circle",
	});
}

export default Component;
