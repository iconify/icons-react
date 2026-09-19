import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p8q-m_98d.css';
import '../../css/t/t5y79tbhq.css';
import '../../css/j/jnpk6nmhv.css';
import '../../css/f/fzeqonvhj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZ7UxC25Y"><g class="ft5dv1b6b"><path class="p8q-m_98d"/><path class="t5y79tbhq"/><path class="jnpk6nmhv"/><path class="fzeqonvhj"/></g></mask></defs><path mask="url(#SVGZ7UxC25Y)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:handbag",
	});
}

export default Component;
