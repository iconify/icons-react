import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/c/cu5xsb1ef.css';
import '../../css/p/pt26ck9bi.css';
import '../../css/c/cmx854b6j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwRs5FcDi"><g class="hv130ab-t"><rect class="cu5xsb1ef"/><path class="pt26ck9bi"/><path class="cmx854b6j"/></g></mask></defs><path mask="url(#SVGwRs5FcDi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:ethernet-off",
	});
}

export default Component;
