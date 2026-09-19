import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/j/jrt2ehbwc.css';
import '../../css/x/xl_m2tbds.css';
import '../../css/g/gnjs1rboy.css';
import '../../css/i/in3hltbgt.css';
import '../../css/u/uqkelwbyq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5jC58bRF"><g class="ufeehvblu"><path class="jrt2ehbwc"/><path class="xl_m2tbds"/><path class="gnjs1rboy"/><path class="in3hltbgt"/><path class="uqkelwbyq"/></g></mask></defs><path mask="url(#SVG5jC58bRF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:cosmetic-brush",
	});
}

export default Component;
