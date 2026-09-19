import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/i/it-6pnb9s.css';
import '../../css/e/eggrvn9ds.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSAcBcIzw"><g class="v3_i3wktz"><path class="it-6pnb9s"/><path class="eggrvn9ds"/></g></mask></defs><path mask="url(#SVGSAcBcIzw)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:connection-point-two",
	});
}

export default Component;
