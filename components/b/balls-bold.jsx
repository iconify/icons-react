import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5i5-fraq.css';
import '../../css/j/jurxy_blt.css';
import '../../css/n/na0l7yy-c.css';
import '../../css/u/udh7ivb4n.css';
import '../../css/z/zrjxdfbje.css';
import '../../css/r/rm2mun58o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5i5-fraq"/><path clip-rule="evenodd" class="jurxy_blt"/><path class="na0l7yy-c"/><path class="udh7ivb4n"/><path class="zrjxdfbje"/><path class="rm2mun58o"/>`,
		"fallback": "solar:balls-bold",
	});
}

export default Component;
