import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz01z324w.css';
import '../../css/i/igtvqq5bu.css';
import '../../css/f/fpndi3bcf.css';
import '../../css/s/snslpzbrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cz01z324w"/><path class="igtvqq5bu"/><path clip-rule="evenodd" class="fpndi3bcf"/><path class="snslpzbrf"/>`,
		"fallback": "solar:file-smile-outline",
	});
}

export default Component;
