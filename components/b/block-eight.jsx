import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk83epm5a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2iNRAbJY"><path class="xk83epm5a"/></mask></defs><path mask="url(#SVG2iNRAbJY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:block-eight",
	});
}

export default Component;
