import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il0u59btn.css';
import '../../css/a/ai9whoirx.css';
import '../../css/a/av0edef4u.css';
import '../../css/l/lxpaeopia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il0u59btn"/><path class="ai9whoirx"/><path clip-rule="evenodd" class="av0edef4u"/><path clip-rule="evenodd" class="lxpaeopia"/>`,
		"fallback": "token:ethereum",
	});
}

export default Component;
