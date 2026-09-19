import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp_77rmhn.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ipfyr43mr.css';
import '../../css/c/cqakgobvy.css';
import '../../css/u/uoi9uoagb.css';
import '../../css/a/a8y4fl3xp.css';
import '../../css/l/l-kdmsoel.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGSJixWdrt" class="fp_77rmhn"/></defs><g class="ft5dv1b6b"><path class="ipfyr43mr"/><path class="cqakgobvy"/><path class="uoi9uoagb"/><use href="#SVGSJixWdrt" class="a8y4fl3xp"/><use href="#SVGSJixWdrt" class="a8y4fl3xp"/><path class="l-kdmsoel"/></g>`,
		"fallback": "icon-park-outline:color-card",
	});
}

export default Component;
