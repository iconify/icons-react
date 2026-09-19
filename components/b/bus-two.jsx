import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/l/ld34ikbzm.css';
import '../../css/d/dn67aubms.css';
import '../../css/v/v2_52rrfv.css';
import '../../css/i/ii0u8bc6s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQakfndGH"><g class="wwvp95byt"><path clip-rule="evenodd" class="ld34ikbzm"/><path class="dn67aubms"/><path class="v2_52rrfv"/><path class="ii0u8bc6s"/></g></mask></defs><path mask="url(#SVGQakfndGH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:bus-two",
	});
}

export default Component;
