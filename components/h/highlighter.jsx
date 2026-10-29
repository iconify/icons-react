import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r141g95mt.css';
import '../../css/w/wl6kj8h9x.css';
import '../../css/r/r2f7wf--x.css';
import '../../css/c/c4b1g3bsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r141g95mt wm-a"/><path class="wl6kj8h9x wm-k"/><path class="r2f7wf--x wm-k"/><path class="c4b1g3bsn wm-a"/>`,
		"fallback": "withicons-bauhaus:highlighter",
	});
}

export default Component;
