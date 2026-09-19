import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/isu9bqbpe.css';
import '../../css/x/xwe23ta8r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGe3smqcPo"><g class="ft5dv1b6b"><path class="isu9bqbpe"/><circle class="xwe23ta8r"/></g></mask></defs><path mask="url(#SVGe3smqcPo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bird",
	});
}

export default Component;
