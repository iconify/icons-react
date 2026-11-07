import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/s/smghx7b8z.css';
import '../../css/c/cabat7cid.css';
import '../../css/v/vitartbbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="smghx7b8z"/><path class="cabat7cid"/></g><path class="vitartbbj"/>`,
		"fallback": "solar:git-commit-bold-duotone",
	});
}

export default Component;
