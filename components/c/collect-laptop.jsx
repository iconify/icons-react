import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/u/usswkqb0n.css';
import '../../css/s/skzye-b9q.css';
import '../../css/n/n090fxd9z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbJxJ9dBq"><g class="v3_i3wktz"><path class="usswkqb0n"/><path class="skzye-b9q"/><path class="n090fxd9z"/></g></mask></defs><path mask="url(#SVGbJxJ9dBq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:collect-laptop",
	});
}

export default Component;
