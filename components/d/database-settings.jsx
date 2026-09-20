import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8ots_bdl.css';
import '../../css/w/w1qg11bis.css';
import '../../css/e/ehgylhzlx.css';
import '../../css/p/pkebo2bbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8ots_bdl"/><path class="w1qg11bis"/><path clip-rule="evenodd" class="ehgylhzlx"/><path clip-rule="evenodd" class="pkebo2bbe"/>`,
		"fallback": "streamline-freehand:database-settings",
	});
}

export default Component;
