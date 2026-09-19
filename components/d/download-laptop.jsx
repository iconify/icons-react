import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/o/oyq5l32hv.css';
import '../../css/s/skzye-b9q.css';
import '../../css/d/dx2uoqbap.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNF40UdJU"><g class="v3_i3wktz"><path class="oyq5l32hv"/><path class="skzye-b9q"/><path class="dx2uoqbap"/></g></mask></defs><path mask="url(#SVGNF40UdJU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:download-laptop",
	});
}

export default Component;
