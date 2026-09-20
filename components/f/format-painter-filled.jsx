import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmue_db-n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmue_db-n"/>`,
		"fallback": "lsicon:format-painter-filled",
	});
}

export default Component;
