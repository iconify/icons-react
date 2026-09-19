import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umcihdb7e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJKBlpclM"><path class="umcihdb7e"/></mask></defs><path mask="url(#SVGJKBlpclM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:align-top-two",
	});
}

export default Component;
