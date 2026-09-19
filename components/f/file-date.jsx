import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/f/fvtb_21_v.css';
import '../../css/w/wht39nbrx.css';
import '../../css/m/mze9y3blp.css';
import '../../css/s/sfbrjpc4q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbASm0cWT"><g class="rohhhzb0l"><path class="fvtb_21_v"/><path class="wht39nbrx"/><circle class="mze9y3blp"/><path class="sfbrjpc4q"/></g></mask></defs><path mask="url(#SVGbASm0cWT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-date",
	});
}

export default Component;
