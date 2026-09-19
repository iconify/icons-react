import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/p/pfvw2bckb.css';
import '../../css/m/mzhpw8m7u.css';
import '../../css/r/ru8717ryg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAqI2ECPO"><g class="rohhhzb0l"><path class="pfvw2bckb"/><path class="mzhpw8m7u"/><path class="ru8717ryg"/></g></mask></defs><path mask="url(#SVGAqI2ECPO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hunting-gear",
	});
}

export default Component;
