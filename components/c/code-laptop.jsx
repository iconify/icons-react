import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/v/v9mldkbxw.css';
import '../../css/s/skzye-b9q.css';
import '../../css/b/b997g1uyo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4JPXbebW"><g class="v3_i3wktz"><path class="v9mldkbxw"/><path class="skzye-b9q"/><path class="b997g1uyo"/></g></mask></defs><path mask="url(#SVG4JPXbebW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:code-laptop",
	});
}

export default Component;
