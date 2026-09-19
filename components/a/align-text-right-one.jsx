import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/u/u3lq9483n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzYuCQy4K"><g class="v3_i3wktz"><rect class="h9qj9o6mz"/><path class="u3lq9483n"/></g></mask></defs><path mask="url(#SVGzYuCQy4K)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:align-text-right-one",
	});
}

export default Component;
