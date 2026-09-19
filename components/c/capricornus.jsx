import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/m/m65256bwd.css';
import '../../css/o/o7tliccxe.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpSnl274O"><g class="rohhhzb0l"><path class="m65256bwd"/><circle class="o7tliccxe"/></g></mask></defs><path mask="url(#SVGpSnl274O)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:capricornus",
	});
}

export default Component;
