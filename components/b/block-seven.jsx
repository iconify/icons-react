import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x853vnbqo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGa6UUhcmp"><path class="x853vnbqo"/></mask></defs><path mask="url(#SVGa6UUhcmp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:block-seven",
	});
}

export default Component;
