import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mwkxb0b3i.css';
import '../../css/a/a8xcheb-m.css';
import '../../css/i/i3xugmule.css';
import '../../css/m/mf9anub4r.css';
import '../../css/v/vy1nuiswl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDnWODc1N"><g class="ft5dv1b6b"><rect class="mwkxb0b3i"/><path class="a8xcheb-m"/><path class="i3xugmule"/><rect class="mf9anub4r"/><rect class="vy1nuiswl"/></g></mask></defs><path mask="url(#SVGDnWODc1N)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:game-console-one",
	});
}

export default Component;
