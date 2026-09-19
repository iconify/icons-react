import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/z/zvkp0cb3v.css';
import '../../css/e/eepjdcbae.css';
import '../../css/r/rz0qkz6ao.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGe3BNDcvY"><g class="ylrso7y3c"><path class="zvkp0cb3v"/><rect class="eepjdcbae"/><path class="rz0qkz6ao"/></g></mask></defs><path mask="url(#SVGe3BNDcvY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:camera",
	});
}

export default Component;
