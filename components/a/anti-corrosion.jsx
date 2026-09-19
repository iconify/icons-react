import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k2a_ighia.css';
import '../../css/c/cgrhg589l.css';
import '../../css/j/jbukd8bpm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGoJQtmclp"><g class="ft5dv1b6b"><path clip-rule="evenodd" class="k2a_ighia"/><path class="cgrhg589l"/><path class="jbukd8bpm"/></g></mask></defs><path mask="url(#SVGoJQtmclp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:anti-corrosion",
	});
}

export default Component;
