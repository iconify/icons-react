import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1okqdbgr.css';
import '../../css/b/bq-mafblk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1okqdbgr"/><path clip-rule="evenodd" class="bq-mafblk"/>`,
		"fallback": "token:hedera",
	});
}

export default Component;
