import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/if55a7bnz.css';
import '../../css/l/l2t9bkdqd.css';
import '../../css/h/hd1iybcfi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGogt14dTY"><g class="rohhhzb0l"><path class="if55a7bnz"/><path clip-rule="evenodd" class="l2t9bkdqd"/><path class="hd1iybcfi"/></g></mask></defs><path mask="url(#SVGogt14dTY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-pdf",
	});
}

export default Component;
