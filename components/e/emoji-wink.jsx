import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzy1ukxea.css';
import '../../css/a/a7dxfdctp.css';
import '../../css/b/btlc75bib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzy1ukxea"/><path clip-rule="evenodd" class="a7dxfdctp"/><path clip-rule="evenodd" class="btlc75bib"/>`,
		"fallback": "stash:emoji-wink",
	});
}

export default Component;
