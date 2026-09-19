import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/f/fx3tpxbif.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgavjbext"><g class="v3_i3wktz"><rect class="h9qj9o6mz"/><path class="fx3tpxbif"/></g></mask></defs><path mask="url(#SVGgavjbext)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:align-text-middle-one",
	});
}

export default Component;
