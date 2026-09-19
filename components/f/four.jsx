import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k75we7n6d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrYVhzblO"><path class="k75we7n6d"/></mask></defs><path mask="url(#SVGrYVhzblO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:four",
	});
}

export default Component;
