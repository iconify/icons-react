import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2ry_ybrz.css';
import '../../css/b/b9icdeqxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2ry_ybrz"/><path class="b9icdeqxn"/>`,
		"fallback": "stash:envelope-flying",
	});
}

export default Component;
