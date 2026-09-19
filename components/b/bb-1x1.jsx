import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpslk2nqm.css';
import '../../css/m/m2lf_3ftl.css';
import '../../css/f/fwoy6hpte.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpslk2nqm"/><path class="m2lf_3ftl"/><path id="SVGUAVZkcZA" class="fwoy6hpte"/><use width="100%" height="100%" href="#SVGUAVZkcZA" transform="matrix(-1 0 0 1 512 0)"/>`,
		"fallback": "flag:bb-1x1",
	});
}

export default Component;
